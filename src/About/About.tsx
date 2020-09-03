import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DependencyCard from './DependencyCard';

import { dependencyLinkList } from './dependencyLinkList';
import { useTranslation } from '../hooks/TranslationContext';

const useStyle = makeStyles(theme => ({
  gridContainer: {
    padding: theme.spacing(2),
    margin: 0,
    width: '100%',
    flexGrow: 1,
  },
  gridItem: {
    // margin: theme.spacing(1),
  },
}));

export default function About () {
  const classes = useStyle();
  const { translation } = useTranslation();

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.gridContainer} spacing={2}> {/* spacing={3} */}
        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="h5" component="h2" color="textPrimary">
            {translation?.about?.dependency?.title}
          </Typography>
        </Grid>
        {dependencyLinkList.map(item => (
          <Grid item xs={12} sm="auto" key={item.id} className={classes.gridItem}>
            <DependencyCard
              name={(translation?.about?.dependency as any)?.[item.id]?.name ?? item.name}
              description={(translation?.about?.dependency as any)?.[item.id]?.description ?? item.description}
              href={item.href}
            ></DependencyCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}