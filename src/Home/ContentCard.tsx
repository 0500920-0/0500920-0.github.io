import React from 'react';
import { Link } from 'react-router-dom';
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
    minWidth: 275,
    padding: theme.spacing(2),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));

interface DependencyCardProps extends CardProps {
  name: string;
  description?: string;
  href: string;
  external?: boolean;
}

export default function DependencyCard({ name, description, href, external = false, ...props }: DependencyCardProps) {
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
        {
          external ? 
          <Button href={href} target="_blank" rel="noopener noreferrer" color="secondary" endIcon={<LaunchIcon />}> {/* variant="contained" */}
            {translation?.contentCard?.external}
          </Button>
          :
          <Button component={Link} to={(location: Object) => ({ ...location, pathname: href })} color="secondary"> {/* variant="contained" */}
            {translation?.contentCard?.internal}
          </Button>
        }
      </CardActions>
    </Card>
  );
}
