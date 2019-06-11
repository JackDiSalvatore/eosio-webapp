import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#000", // Black
			contrastText: "#8DFFA9" // Green
		},
		secondary: {
			main: "#FF5B3F", // Orange
			contrastText: "#00f"
		},
		type: 'dark',
	},
	typography: {
		// Sets the font throughout the application.  Requires using Material UI typography component.
		fontFamily: ["Exo2Regular", "Roboto"].join(",")
	},
});

ReactDOM.render(
<MuiThemeProvider theme={theme}>
    <App />
</MuiThemeProvider>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
