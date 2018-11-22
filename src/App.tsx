import * as React from 'react';
import Modal from 'react-foundation-modal';
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
          <Modal
            open={true}
            isModal={true}
            size="medium"
          >
            Hi there
          </Modal>
        </div>
      </Provider>
    );
  }
}

export default App;
