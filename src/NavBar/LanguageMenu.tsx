import React, { useMemo, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TranslateIcon from '@material-ui/icons/Translate';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useTranslation, supportedLanguageList } from '../hooks/TranslationContext';

interface LanguageMenuProps {
  showText?: boolean;
}
export default function LanguageMenu({ showText = false }: LanguageMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { lang, setLang } = useTranslation();

  
  const location = useLocation();
  const queryStringLang = useMemo(() => new URLSearchParams(location.search).get('lang'), [location.search]);
  /* set lang only if query string is set, not vice-versa */
  useEffect(() => {
    if (queryStringLang && queryStringLang in supportedLanguageList) setLang(queryStringLang);
  }, [queryStringLang, setLang]);
  const history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, langCode: string) => {
    setLang(langCode);
    setAnchorEl(null);
    history.replace(`${location.pathname}?lang=${langCode}`);
  }

  return (
    <>
      { showText ? (
        <Button
          aria-controls="language-menu"
          aria-haspopup="true"
          onClick={handleClick}
          aria-label="change language"
          color="inherit"
          startIcon={<TranslateIcon/>}
        >
          {supportedLanguageList[lang]}
        </Button>
        ) : (
        <IconButton // Button
          aria-controls="language-menu"
          aria-haspopup="true"
          onClick={handleClick}
          aria-label="change language"
          color="inherit"
        >
          <TranslateIcon/>
        </IconButton>
      ) }
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.entries(supportedLanguageList).map(([langCode, langName]) => 
            <MenuItem 
                key={langCode}
                selected={langCode === lang}
                onClick={(event) => handleMenuItemClick(event, langCode)}
            >
              {langName}
            </MenuItem>
        )}
      </Menu>
    </>
  );
}
