//React
import React from 'react';
import ReactDOM from 'react-dom';

//mainView component
import MainView from './components/main-view/main-view';
import {NavbarView} from './components/navbar-view/navbar-view';

//react-bootstrap
import Container from 'react-bootstrap/Container'

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

//React-Redux for state control
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import bookApp from './reducers/reducers'
import { devToolsEnhancer } from 'redux-devtools-extension';

//create state store (redux) and use bookApp reducer in it
const store = createStore(bookApp, devToolsEnhancer());

// Main component (will use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}> 
         <MainView/>
      </Provider>
       );
  }
}

// Find the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tell React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
