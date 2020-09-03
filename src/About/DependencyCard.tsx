import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card, { CardProps } from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LaunchIcon from '@material-ui/icons/Launch';
import { useTranslation } from '../hooks/TranslationContext';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275, // minWidth
    padding: theme.spacing(2),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));

interface DependencyCardProps extends CardProps {
  name: string;
  description?: string;
  href: string;
}

export default function DependencyCard({ name, description, href, ...props }: DependencyCardProps) {
  const classes = useStyles();
  const { translation } = useTranslation();
  return (
    <Card className={classes.root} {...props}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={href} target="_blank" rel="noopener noreferrer" color="secondary" endIcon={<LaunchIcon />}> {/* variant="contained" */}
          {translation?.about?.dependency?.external}
        </Button>
      </CardActions>
    </Card>
  );
}
