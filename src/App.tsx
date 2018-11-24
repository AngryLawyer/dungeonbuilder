import * as React from 'react';
import { Column, Row } from 'react-foundation';
import Modal from 'react-foundation-modal';
import { connect } from 'react-redux';
import './App.css';

import Map from './map';
import Menu from './menu';
import { Store } from './reducers';

interface ConnectedProps {
  modal: boolean;
}

type Props = ConnectedProps;

class App extends React.PureComponent<Props> {
  public render() {
    return (
      <div>
        <Menu/>
        <Row>
          <Column large={8}>
            <Map/>
          </Column>
          <Column large={4}>
            FILL ME
          </Column>
        </Row>
        <Modal
          open={this.props.modal}
          isModal={true}
          size="medium"
        >
          Hi there
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(store: Store): ConnectedProps {
  return {
    modal: store.modal,
  }
}

export default connect(mapStateToProps)(App);
