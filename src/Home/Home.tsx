import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import avatarSource from '../tubaAvatarSquare.png';

import ContentCard from './ContentCard';

// data
import { usefulLinkList } from './usefulLinkList';
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
  largeAvatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(12),
    height: theme.spacing(12),
    // marginRight: theme.spacing(4),
  },
}));

export default function Home () {
  const classes = useStyle();
  const { translation } = useTranslation();
  return (
    <Container maxWidth="lg">
      <Grid container className={classes.gridContainer} justify="center" spacing={2}> {/* spacing={3} */}
        <Grid container className={`${classes.gridItem} ${classes.gridContainer}`} justify="center" alignItems="center" spacing={2}>
          <Grid item className={classes.gridItem}>
            <Avatar alt="Meng Iao Fong" className={classes.largeAvatar} src={avatarSource} />
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography variant="h4" component="h2" color="textPrimary">
              {translation?.home?.name}
            </Typography>
            <Typography variant="h5" component="h3" color="textSecondary">
              {translation?.home?.department}
            </Typography>
          </Grid>
        </Grid>

        {usefulLinkList.map(item => (
          <Grid item xs={12} sm="auto" key={item.id} className={classes.gridItem}>
            <ContentCard
              name={(translation as any)?.[item.id]?.title ?? item.name}
              description={(translation as any)?.[item.id]?.description ?? item.description}
              href={item.href}
              external={item.external}
            ></ContentCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}