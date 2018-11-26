import * as React from 'react';
import { Button, ButtonGroup } from 'react-foundation';
import { IoMdSquare, IoMdSquareOutline } from 'react-icons/io';
import { connect } from 'react-redux';

class Brushes extends React.PureComponent {
  public render () {
    return (
      <ButtonGroup>
        <Button><IoMdSquareOutline/></Button>
        <Button><IoMdSquare/></Button>
      </ButtonGroup>
    );
  }
}

export default connect()(Brushes);
