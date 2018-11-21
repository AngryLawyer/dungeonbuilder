import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import Map from './map';
import Menu from './menu';
import store from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div>
          <Menu/>
          <Map/>
        </div>
      </Provider>
    );
  }
}

export default App;
