import * as React from 'react';
import { Button, ButtonGroup } from 'react-foundation';
import { IoIosBrush, IoIosQrScanner } from 'react-icons/io';
import { connect } from 'react-redux';

class Tools extends React.PureComponent {
  public render () {
    return (
      <ButtonGroup>
        <Button><IoIosBrush/></Button>
        <Button><IoIosQrScanner/></Button>
      </ButtonGroup>
    );
  }
}

export default connect()(Tools);
