import * as React from 'react';
import { connect } from 'react-redux';

import { Store } from '../reducers';
import {
  mouseDown,
  mouseUp,
  setCells,
  setMousePos,
} from './actions';
import Brushes from './brushes';
import { cursor, floor, wall } from './draw';
import Tools from './tools';
import { CELL_SIZE, GridRef, MapData, MouseState } from './types';

interface StateProps {
  mapData: MapData;
  mouse: MouseState;
}

interface DispatchProps {
  setCells: typeof setCells;
  setMousePos: typeof setMousePos;
  mouseUp: typeof mouseUp;
  mouseDown: typeof mouseDown;
}

type Props = StateProps & DispatchProps;

class Map extends React.PureComponent<Props> {
  private canvas: React.RefObject<HTMLCanvasElement>;

  public constructor (props: Props) {
    super(props);
    this.canvas = React.createRef();
  }

  public componentDidMount() {
    this.redraw(this.props, null);
  }

  public componentDidUpdate(oldProps: Props | null) {
    this.redraw(this.props, oldProps);
  }

  public render () {
    const { mapData } = this.props;
    return (
      <>
        <canvas
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onMouseMove={this.onMouseMove}
          ref={this.canvas}
          width={mapData.width * CELL_SIZE}
          height={mapData.height * CELL_SIZE}
        />
        <Brushes/>
        <Tools/>
      </>
    );
  }

  private redraw (props: Props, oldProps: Props | null) {
    const ctx = this.canvas.current!.getContext('2d');
    if (ctx) {
      const currentPos = props.mouse.current;
      const { mapData } = props;
      mapData.cells.forEach((cell, index) => {
        const x = index % mapData.width;
        const y = Math.floor(index / mapData.height);
        if (currentPos && currentPos.x === x && currentPos.y === y) {
          cursor(ctx, x, y);
        } else if (cell) {
          wall(ctx, x, y);
        } else {
          floor(ctx, x, y);
        }
      })
    }
  }

  private onMouseDown = (event: React.MouseEvent) => {
    const cell = this.getGridRefFromClick(this.canvas.current!, event);
    this.props.setCells([cell], true);
    this.props.mouseDown();
  }

  private onMouseUp = (event: React.MouseEvent) => {
    this.props.mouseUp();
  }

  private getGridRefFromClick(dom: HTMLElement, event: React.MouseEvent): GridRef {
    const bounds = dom.getBoundingClientRect();
    return {
      x: Math.floor((event.clientX - bounds.left) / CELL_SIZE),
      y: Math.floor((event.clientY - bounds.top) / CELL_SIZE),
    }
  }

  private onMouseMove = (event: React.MouseEvent) => {
    const cell = this.getGridRefFromClick(this.canvas.current!, event);
    const currentPos = this.props.mouse.current;
    if (!currentPos || cell.x !== currentPos.x || cell.y !== currentPos.y) {
      this.props.setMousePos(cell);
      if (this.props.mouse.mouseDown) {
        this.props.setCells([cell], true);
      }
    }
  }
}

function mapStateToProps(state: Store): StateProps {
  return {
    mapData: state.map.map,
    mouse: state.map.mouse,
  }
}

export default connect(mapStateToProps, { setMousePos, setCells, mouseDown, mouseUp })(Map);
