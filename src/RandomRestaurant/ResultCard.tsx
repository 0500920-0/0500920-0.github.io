import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card, { CardProps } from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from '../hooks/TranslationContext';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    // height: 128,
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  actions: {

  },
}));

interface ResultCardProps extends CardProps {
  title: string;
  subtitle?: string;
  onResetClick?: (event: React.MouseEvent) => void;
  onCheckClick?: (event: React.MouseEvent) => void;
}

export default function ResultCard({ title, subtitle, onResetClick, onCheckClick, ...props }: ResultCardProps) {
  const classes = useStyles();
  const { translation } = useTranslation();

  return (
    <Card className={classes.root} {...props}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">
          {subtitle ?? <br/>}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" onClick={onResetClick} color="secondary">{translation?.random?.resultCard?.resetButton}</Button>
        <Button size="small" onClick={onCheckClick} color="secondary">{translation?.random?.resultCard?.checkButton}</Button>
      </CardActions>
    </Card>
  );
}
