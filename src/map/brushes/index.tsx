import * as React from 'react';
import { ButtonGroup } from 'react-foundation';
import { IoMdSquare, IoMdSquareOutline } from 'react-icons/io';
import { connect } from 'react-redux';
import { Store } from '../../reducers';
import { setBrush } from '../actions';
import { BrushType } from '../types';
import { Brush } from './brush';

interface DispatchProps {
  setBrush: typeof setBrush,
}

interface StateProps {
  brush: BrushType,
}

type Props = DispatchProps & StateProps;

const BRUSH_TYPES = [
  {element: IoMdSquareOutline, type: BrushType.FLOOR},
  {element: IoMdSquare, type: BrushType.WALL},
  {element: IoMdSquare, type: BrushType.DOOR}
];

class Brushes extends React.PureComponent<Props> {
  public render () {
    return (
      <ButtonGroup>
        {
          BRUSH_TYPES.map(brushData =>
            <Brush key={brushData.type} element={brushData.element} brush={brushData.type} onClick={this.props.setBrush} selected={brushData.type === this.props.brush}/>
          )
        }
      </ButtonGroup>
    );
  }
}

function mapStateToProps(store: Store): StateProps {
  return {
    brush: store.map.brush,
  }
}

export default connect(mapStateToProps, { setBrush })(Brushes);
