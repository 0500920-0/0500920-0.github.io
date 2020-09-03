import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import DarkIcon from '@material-ui/icons/Brightness4';
import LightIcon from '@material-ui/icons/Brightness5';

export default function BrightnessButton({ isDarkTheme, onClick }: { isDarkTheme: boolean, onClick?: (event: React.MouseEvent) => void }) {

  return (
    <div>
      <IconButton
        aria-controls="brightness-button"
        onClick={onClick}
        aria-label="change light / dark theme"
        // edge="end"
        color="inherit"
      >
        {isDarkTheme ? <DarkIcon /> : <LightIcon/>}
      </IconButton>
    </div>
  );
}
