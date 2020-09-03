import { teal, lightBlue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
	palette: {
		primary: {
			main: teal[700],
		},
		secondary: {
			main: lightBlue[700],
		},
		background: {
			default: '#000',
		},
		type: 'dark',
	},
});

export default theme;
