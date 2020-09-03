import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './index.css';
import App from './App';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import * as serviceWorker from './serviceWorker';

import {
    // BrowserRouter as Router
    HashRouter as Router,
} from 'react-router-dom';

import { TranslationContextProvider } from './hooks/TranslationContext';

function Index () {
	const isDarkThemeDefault = useMediaQuery('(prefers-color-scheme: dark)');
    const [isDarkTheme, setDarkTheme] = useState(undefined as boolean | undefined);
    
    // If using BrowserRouter instead of HashRouter, add this prop: basename={process.env.PUBLIC_URL}
    return (
        <Router>
            <TranslationContextProvider>
                <ThemeProvider theme={isDarkTheme ?? isDarkThemeDefault ? darkTheme : lightTheme}>
                    <App isDarkTheme={isDarkTheme ?? isDarkThemeDefault} setDarkTheme={setDarkTheme} />
                </ThemeProvider>
            </TranslationContextProvider>
        </Router>
    );
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
