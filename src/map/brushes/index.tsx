import * as React from 'react';
import { Button, ButtonGroup } from 'react-foundation';
import { IoMdSquare, IoMdSquareOutline } from 'react-icons/io';
import { connect } from 'react-redux';
import { setBrush } from '../actions';

interface DispatchProps {
  setBrush: typeof setBrush;
}

type Props = DispatchProps;

class Brushes extends React.PureComponent<Props> {
  public render () {
    return (
      <ButtonGroup>
        <Button><IoMdSquareOutline/></Button>
        <Button><IoMdSquare/></Button>
      </ButtonGroup>
    );
  }
}

export default connect(null, { setBrush })(Brushes);
