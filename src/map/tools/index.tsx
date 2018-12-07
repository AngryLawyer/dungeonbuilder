import * as React from 'react';
import { ButtonGroup } from 'react-foundation';
import { IoIosBrush, IoIosQrScanner } from 'react-icons/io';
import { connect } from 'react-redux';
import { Store } from '../../reducers';
import { setTool } from '../actions';
import { ToolType } from '../types';
import { Tool } from './tool';

interface DispatchProps {
  setTool: typeof setTool,
}

interface StateProps {
  tool: ToolType,
}

type Props = DispatchProps & StateProps;

class Tools extends React.PureComponent<Props> {
  public render () {
    return (
      <ButtonGroup>
        {
          [{element: IoIosBrush, type: ToolType.BRUSH}, {element: IoIosQrScanner, type:ToolType.RECTANGLE}].map(brushData =>
            <Tool key={brushData.type} element={brushData.element} tool={brushData.type} onClick={this.props.setTool} selected={brushData.type === this.props.tool}/>
          )
        }
      </ButtonGroup>
    );
  }
}

function mapStateToProps(store: Store): StateProps {
  return {
    tool: store.map.tool,
  }
}

export default connect(mapStateToProps, { setTool })(Tools);
