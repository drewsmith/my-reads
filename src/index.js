import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { BrowserRouter, Route } from 'react-router-dom'

// css
import './index.css';

// components
import Home from './components/Home'
import Search from './components/Search'

import reducer from './reducers'

const store = createStore(reducer)

const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(
  <Root />, 
  document.getElementById('root')
);
registerServiceWorker();
