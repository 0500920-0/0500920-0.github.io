import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import UpperRightMenu from './UpperRightMenu';
import LanguageMenu from './LanguageMenu';
import BrightnessButton from './BrightnessButton';
import MenuIcon from '@material-ui/icons/Menu';
import GithubIcon from '@material-ui/icons/GitHub';
import ScienceIcon from '../icons/Science';

import { useTranslation } from '../hooks/TranslationContext';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

interface NavBarProps extends AppBarProps {
  title?: string;
  toggleDrawer: (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  isDarkTheme: boolean;
  setDarkTheme?: (shouldSetDarkTheme: boolean) => void;
  isSuspensed?: boolean
}
export default function NavBar({ toggleDrawer, isDarkTheme, setDarkTheme, title, isSuspensed = false, ...props }: NavBarProps) {
  const classes = useStyles();
  const isPrinting = useMediaQuery('print');

  const { translation } = useTranslation();
  useEffect(() => {
    if (isSuspensed || !title) return;
    document.title = translation?.getTitle?.(title);
  }, [title, isSuspensed, translation]);

  if (isPrinting) return (
    <>
      <AppBar position="fixed" {...props}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <IconButton color="inherit" edge="end">
            <ScienceIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </>
  );

  return (
    <>
      <AppBar position="fixed" {...props}>
        <Toolbar>
          <Hidden mdUp implementation="css">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          
          <Hidden smDown implementation="css">
            {/* <LinkButton path="/" title={translation?.home?.title} startIcon={<HomeIcon />} />
            <LinkButton path="/periodic-table" title={translation?.periodicTable?.title} startIcon={<ScienceIcon />} />
            <LinkButton path="/random" title={translation?.random?.title} startIcon={<ExploreIcon />} />
            <LinkButton path="/about" title={translation?.about?.title} startIcon={<InfoIcon />}  /> */}
            <LanguageMenu showText />
            <IconButton
              color="inherit"
              aria-label="open link: github 0500920-0"
              href="https://github.com/0500920-0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </IconButton>
          </Hidden>
          <Hidden mdUp implementation="css">
            <LanguageMenu />
          </Hidden>
          <BrightnessButton isDarkTheme={isDarkTheme} onClick={() => setDarkTheme?.(!isDarkTheme)}/>
          <UpperRightMenu />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </>
  );
}
