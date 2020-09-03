import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';

import Zoom from '@material-ui/core/Zoom';

import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import RefreshIcon from '@material-ui/icons/Refresh';
import { useTranslation } from '../hooks/TranslationContext';

interface RandomFabProps extends Partial<TooltipProps> {
  onClick?: (event: React.MouseEvent) => void;
  isResetButton?: boolean;
  disabled?: boolean;
}

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function RandomFab({ onClick, isResetButton, disabled = false, ...props }: RandomFabProps) {
  const classes = useStyles();
  const theme = useTheme();
  const { translation } = useTranslation();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <>
      <Zoom
        in={!isResetButton}
        timeout={transitionDuration}
        style={{
          transitionDelay: `${!isResetButton ? transitionDuration.exit : 0}ms`,
        }}
        unmountOnExit
      >
        <Tooltip title={translation?.random?.fab?.pick} aria-label={translation?.random?.fab?.pick} {...props}>
          <Fab
            color="primary"
            className={classes.absolute}
            onClick={disabled ? undefined : onClick}
            variant="extended"
          >
            <NotListedLocationIcon className={classes.extendedIcon} />
            {translation?.random?.fab?.pick}
          </Fab>
        </Tooltip>
      </Zoom>
      <Zoom
        in={isResetButton}
        timeout={transitionDuration}
        style={{
          transitionDelay: `${isResetButton ? transitionDuration.exit : 0}ms`,
        }}
        unmountOnExit
      >
        <Tooltip title={translation?.random?.fab?.reset} aria-label={translation?.random?.fab?.reset} {...props}>
          <Fab
            color="secondary"
            className={classes.absolute}
            onClick={disabled ? undefined : onClick}
            variant="extended"
          >
            <RefreshIcon className={classes.extendedIcon} />
            {translation?.random?.fab?.reset}
          </Fab>
        </Tooltip>
      </Zoom>
    </>
  );
}
