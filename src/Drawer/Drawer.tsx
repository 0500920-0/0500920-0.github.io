import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer, { SwipeableDrawerProps } from '@material-ui/core/SwipeableDrawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Slide from '@material-ui/core/Collapse';

import Avatar from '@material-ui/core/Avatar';
// import { deepOrange } from '@material-ui/core/colors';
import avatarSource from '../tubaAvatarSquare.png';

import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import LaunchIcon from '@material-ui/icons/Launch';
import ScienceIcon from '../icons/Science';

import DrawerItem from './DrawerItem';

import { useTranslation } from '../hooks/TranslationContext';

const useStyles = makeStyles((theme) => ({
  list: {
    width: ({ width }: { width: number }) => width,
  },
  avatar: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
    backgroundColor: theme.palette.background.paper, // deepOrange[500],
  },
}));

interface ResponsiveDrawerProps extends Partial<SwipeableDrawerProps> {
  toggleDrawer(isOpen: boolean): (event: React.KeyboardEvent | React.MouseEvent) => void;
  isDrawerOpened: boolean;
  width: number;
}
export default function ResponsiveDrawer({ toggleDrawer, isDrawerOpened, width, ...props }: ResponsiveDrawerProps) {
  const classes = useStyles({ width });
  const { translation } = useTranslation();
  const isHome = useRouteMatch({ path: '/', exact: true });

  const drawerMain = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Slide in={!isHome}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Fong Meng Iao" className={classes.avatar} src={avatarSource} />
            </ListItemAvatar>
            <ListItemText primary={translation?.drawer?.name} secondary={translation?.drawer?.department} />
          </ListItem>
        </Slide>
        <Divider />
        <DrawerItem path="/" title={translation?.home?.title} startIcon={<HomeIcon />} />
        <Divider />
        <DrawerItem path="/periodic-table" title={translation?.periodicTable?.title} startIcon={<ScienceIcon />} />
        <DrawerItem path="/random" title={translation?.random?.title} startIcon={<ExploreIcon />} />
        <Divider />
        <DrawerItem path="/about" title={translation?.about?.title} startIcon={<InfoOutlined />} />
        <DrawerItem path="https://0500920-0.github.io/resume/index.html" external title={translation?.profile?.title} startIcon={<LaunchIcon />} />
      </List>
    </div>
  );

  return (
    <>
      <SwipeableDrawer
        variant="temporary"
        open={isDrawerOpened}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile.
        {...props}
      >
        {drawerMain}
      </SwipeableDrawer>
      <Hidden mdUp implementation="css">
        <SwipeableDrawer
          variant="temporary"
          open={isDrawerOpened}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          ModalProps={{ keepMounted: true }} // Better open performance on mobile.
          {...props}
        >
          {drawerMain}
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
        >
          {drawerMain}
        </Drawer>
      </Hidden>
    </>
  );
}
