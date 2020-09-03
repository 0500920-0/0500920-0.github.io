import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  // Link
} from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar/NavBar';
import Drawer from './Drawer/Drawer';

import { useTranslation } from './hooks/TranslationContext';

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.default,
      transition: `all ${theme.transitions.duration.shortest}ms ease-out`,
      '@media print': {
        backgroundColor: '#fff',
      },
    },
  },
  root: {
    // backgroundColor: theme.palette.background.paper,
    position: 'relative',
    display: 'flex',
    // justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    '@media print': {
      display: 'none',
    },
  },
  appBar: {
    transition: 'background .2s ease-in',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    '@media print': {
      width: '100%',
      marginLeft: 'inherit',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

// Lazy loading
const Home = React.lazy(() => import('./Home/Home'));
const RandomRestaurant = React.lazy(() => import('./RandomRestaurant/Random'));
const About = React.lazy(() => import('./About/About'));
const PeriodicTable = React.lazy(() => import('./PeriodicTable/PeriodicTable'));

interface AppProps {
	isDarkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean | undefined>>; // StateUpdater<boolean | undefined>;
}
export default function App ({ isDarkTheme, setDarkTheme }: AppProps) {
  const classes = useStyles();
  const { translation } = useTranslation();
  const [isDrawerOpened, setDrawerState] = React.useState(false);
  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerState(isOpen);
  };
  const drawerProps = {
    toggleDrawer,
    isDrawerOpened,
    classes: { paper: classes.drawerPaper },
    width: drawerWidth,
  };
  const navBarProps = {
    toggleDrawer,
    isDarkTheme,
    setDarkTheme,
    className: classes.appBar,
  };
  return (
      <div className={classes.root}>
        <nav className={classes.drawer} aria-label="app drawer">
          <Drawer {...drawerProps} />
        </nav>
        <main className={classes.content}> {/* to break the flexbox spell wwwww */}
        <React.Suspense fallback={<NavBar {...navBarProps} title={translation?.loading} isSuspensed />}>
          <Switch>
            <Route exact path="/">
              <NavBar {...navBarProps} title={translation?.home?.title} />
              <Home />
            </Route>
            <Route path="/random">
              <NavBar {...navBarProps} title={translation?.random?.title} />
              <RandomRestaurant />
            </Route>
            <Route path="/about">
              <NavBar {...navBarProps} title={translation?.about?.title} />
              <About />
            </Route>
            <Route path="/periodic-table">
              <NavBar {...navBarProps} title={translation?.periodicTable?.title} color="secondary" />
              <PeriodicTable/>
            </Route>
            {/* Redirect all 404's to home */}
            <Redirect to="/" />
          </Switch>
        </React.Suspense>
        </main>
      </div>
  );
}
