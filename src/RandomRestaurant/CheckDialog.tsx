import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { StateItem } from './useRandomizer'; // type only
import { useTranslation } from '../hooks/TranslationContext';
interface CheckDialogProps extends DialogProps {
  pickedList: StateItem[];
  randomList: StateItem[];
  totalWeight: number;
  onClose?: (event: {} | React.MouseEvent, reason?: "backdropClick" | "escapeKeyDown") => void;
  open: boolean;
}

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


export default function CheckDialog({ pickedList, randomList, totalWeight, onClose, open, ...props }: CheckDialogProps) {
  const classes = useStyles();
  const { translation } = useTranslation();

  const [isCheckExpended, setCheckExpend] = React.useState(false);
  const [isLeftExpended, setLeftExpend] = React.useState(true);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const leftList = [...randomList].sort((a, b) => b.weight - a.weight);
  const leftListWeightTotal = totalWeight; // leftList.reduce((acc, item) => acc + item.weight, 0);
  // const pickedList = list.filter((item) => item.picked);

  function getName (id: string, isAlias: boolean = false) {
    return (translation?.random?.locationList as any)?.[id ?? '']?.[isAlias ? 'alias' : 'name'];
  }

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      {...props}
    >
      {' '}
      {/* scroll="body" */}
      <DialogTitle id="simple-dialog-title">{translation?.random?.dialog?.checkTitle}</DialogTitle>
      <DialogContent>
        <List>
          <ListItem button onClick={() => setLeftExpend(!isLeftExpended)}>
            <ListItemText primary={translation?.random?.dialog?.leftList} />
            {isLeftExpended ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isLeftExpended} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {
                leftList.length
                  ? leftList.map((item) => (
                    <ListItem key={item.id} button className={classes.nested}>
                      <ListItemText
                        primary={`${getName(item.id)} ${getName(item.id, true) ? `(${getName(item.id, true)})` : ''}`}
                        secondary={`${((item.weight / leftListWeightTotal) * 100).toFixed(2)}%`}
                      />
                    </ListItem>
                  ))
                  : (
                    <ListItem button className={classes.nested}>
                      <ListItemText secondary={translation?.random?.dialog?.empty} />
                    </ListItem>
                  )
              }
            </List>
          </Collapse>
          <ListItem button onClick={() => setCheckExpend(!isCheckExpended)}>
            <ListItemText primary={translation?.random?.dialog?.pickedList} />
            {isCheckExpended ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isCheckExpended} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {
                pickedList.length
                  ? pickedList.map((item) => (
                    <ListItem key={item.id} button className={classes.nested}>
                      <ListItemText primary={`${getName(item.id)}`} />
                    </ListItem>
                  ))
                  : (
                    <ListItem button className={classes.nested}>
                      <ListItemText secondary={translation?.random?.dialog?.empty} />
                    </ListItem>
                  )
              }
            </List>
          </Collapse>
        </List>
      </DialogContent>

      {/* <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon> */}
      <DialogActions>
        <Button onClick={onClose} autoFocus color="secondary">
          {' '}
          {/* color="primary" */}
          {translation?.random?.dialog?.returnButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
