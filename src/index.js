import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#0244FF", // ?
			contrastText: "#000" // Black
		},
		secondary: {
			main: "#FF5B3F", // Orange
			contrastText: "#fff"
		}
	},
	typography: {
		// Sets the font throughout the application.  Requires using Material UI typography component.
		fontFamily: ["Proxima Nova Lt", "Nexa", "NexaHeavy", "Roboto"].join(",")
	}
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
