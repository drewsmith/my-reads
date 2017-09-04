import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//components
import Bookshelf from './components/Bookshelf'
import TopNav from './components/TopNav'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <TopNav />
          <Bookshelf />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
