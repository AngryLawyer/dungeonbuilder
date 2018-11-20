import * as React from 'react';
import { Menu, MenuItem, MenuText, Row, TopBar, TopBarLeft }  from 'react-foundation';
import { Provider } from 'react-redux';
import './App.css';

import Map from './map';
import store from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div>
          <TopBar>
            <Row>
              <TopBarLeft>
                <Menu>
                  <MenuItem>
                    <MenuText>
                      New
                    </MenuText>
                  </MenuItem>
                </Menu>
              </TopBarLeft>
            </Row>
          </TopBar>
          <Map/>
        </div>
      </Provider>
    );
  }
}

export default App;
