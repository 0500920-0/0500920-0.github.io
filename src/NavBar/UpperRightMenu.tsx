import React from 'react';
import { useHistory } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import RefreshIcon from '@material-ui/icons/Refresh';
import { useTranslation } from '../hooks/TranslationContext';

export default function UpperRightMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const history = useHistory();

  const { translation } = useTranslation();

  const handleClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGoBack = () => {
    handleClose();
    history.goBack();
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        aria-label="display more actions"
        // edge="end"
        color="inherit"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleGoBack}>
          <ListItemIcon>
            <ArrowBackIcon fontSize="small" />
          </ListItemIcon>
          {translation?.upperRightMenu?.lastPage}
        </MenuItem>
        <MenuItem onClick={() => window.location.reload(true)}>
          <ListItemIcon>
            <RefreshIcon fontSize="small" />
          </ListItemIcon>
          {translation?.upperRightMenu?.forceReload}
        </MenuItem>
      </Menu>
    </div>
  );
}
