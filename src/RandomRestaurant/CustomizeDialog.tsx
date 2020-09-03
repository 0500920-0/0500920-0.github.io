import React, { useState } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

import { RandomItem } from './locationList'; // type only
import { useTranslation } from '../hooks/TranslationContext';
interface CheckDialogProps extends Omit<DialogProps, 'onClose'> {
  randomList: RandomItem[];
  onClose?: (event: React.MouseEvent, submitList: RandomItem[] | null, reason?: "backdropClick" | "escapeKeyDown") => void;
  open: boolean;
}

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));


export default function CheckDialog({
  randomList, onClose, open, ...props
}: CheckDialogProps) {
  const classes = useStyles();
  const { translation } = useTranslation();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const sortedList = randomList.map((item) => ({
    ...item,
    weight: item.defaultWeight,
  } as RandomItem)).sort((a, b) => b.defaultWeight - a.defaultWeight);
  
  const [list, setList] = useState(sortedList);

  function handleChange (inputName: string) {
    return function (evt: React.ChangeEvent<HTMLInputElement>) {
      const value = +evt.target.value;
      setList((list: RandomItem[]) => {
        const newList = [...list];
        const changedItem = newList.find((item) => item.id === inputName) as RandomItem;
        changedItem.weight = value > 0 ? value : 0;
        return newList;
      });
    }
  }

  function handleClose (isSubmitting: boolean) {
    return function (evt: React.MouseEvent, reason?: "backdropClick" | "escapeKeyDown") {
      onClose?.(evt, isSubmitting ? list : null, reason);
    }
  }

  function getName (id: string, isAlias: boolean = false) {
    return (translation?.random?.locationList as any)?.[id ?? '']?.[isAlias ? 'alias' : 'name'];
  }

  return (
    <Dialog
      onClose={handleClose(false)}
      aria-labelledby="customize-dialog-title"
      open={open}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      {...props}
    >
      <DialogTitle id="customize-dialog-title">{translation?.random?.dialog?.customizeTitle}</DialogTitle>
      <DialogContent>
        <form autoComplete="off">
          <List component="div" disablePadding>
            {
              list.map((item) => (
                <ListItem key={item.id} button className={classes.nested}>
                  <ListItemText
                    primary={`${getName(item.id)} ${getName(item.id, true) ? `(${getName(item.id, true)})` : ''}`}
                    secondary={`${translation?.random?.dialog?.defaultWeightTag}${item.defaultWeight}`}
                  />
                  <TextField
                    id={`input-${item.id}`} label={translation?.random?.dialog?.weight}
                    // defaultValue={item.defaultWeight}
                    required
                    type="number"
                    value={item.weight}
                    onChange={handleChange(item.id)}
                  />
                </ListItem>
              ))
            }
          </List>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose(true)} color="secondary">
          {translation?.random?.dialog?.submitButton}
        </Button>
        <Button onClick={handleClose(false)} color="primary">
          {translation?.random?.dialog?.cancelButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
