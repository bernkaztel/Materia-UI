
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './components/Navbar'
import BottomNavigationExampleSimple from './components/Footer'
import CardExampleWithAvatar from './components/Card'

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar />
    <BottomNavigationExampleSimple/>
    <CardExampleWithAvatar/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('main')
);