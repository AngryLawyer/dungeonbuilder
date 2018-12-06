import * as React from 'react';
import { Column, Row } from 'react-foundation';

import Map from '../map';
import Menu from '../menu';
import Modals from '../modals';

export default class App extends React.PureComponent<{}> {
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
        <Modals />
      </div>
    );
  }
}
