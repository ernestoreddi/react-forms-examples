import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import App from './App';
import store from './redux/store'
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#4f83cc',
      main: '#01579b',
      dark: '#002f6c',
      contrastText: '#ffffff'
    }
  },
});

ReactDOM.render(
<Provider store={store}>
<CssBaseline />
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
