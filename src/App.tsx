import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import logo from './logo.svg';
import Map from './map';
import store from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Map/>
        </div>
      </Provider>
    );
  }
}

export default App;
