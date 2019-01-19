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
import { cursor, door, floor, wall } from './draw';
import Tools from './tools';
import { BrushType, CELL_SIZE, GridRef, MapData, MouseState, ToolType } from './types';
import { gridRefInside, makeSquare, squareToCells } from './utils';

interface StateProps {
  mapData: MapData;
  mouse: MouseState;
  brush: BrushType;
  tool: ToolType;
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
      const { mapData, tool, mouse } = props;
      mapData.cells.forEach((cell, index) => {
        const x = index % mapData.width;
        const y = Math.floor(index / mapData.height);

        if (tool === ToolType.RECTANGLE && mouse.mouseDown && currentPos && gridRefInside({x, y}, makeSquare(mouse.mouseDown, currentPos))) {
          cursor(ctx, x, y);
        } else if (tool === ToolType.BRUSH && currentPos && currentPos.x === x && currentPos.y === y) {
          cursor(ctx, x, y);
        } else if (cell === BrushType.WALL) {
          wall(ctx, x, y);
        } else if (cell === BrushType.DOOR) {
          door(ctx, x, y);
        } else {
          floor(ctx, x, y);
        }
      })
    }
  }

  private onMouseDown = (event: React.MouseEvent) => {
    const cell = this.getGridRefFromClick(this.canvas.current!, event);
    this.props.mouseDown(cell);
    if (this.props.tool === ToolType.BRUSH) {
      this.props.setCells([cell], this.props.brush);
    }
  }

  private onMouseUp = (event: React.MouseEvent) => {
    if (this.props.tool === ToolType.RECTANGLE) {
      if (this.props.mouse.current && this.props.mouse.mouseDown) {
        this.props.setCells(squareToCells(makeSquare(this.props.mouse.mouseDown, this.props.mouse.current)), this.props.brush);
      };
    }
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
      if (this.props.tool === ToolType.BRUSH && this.props.mouse.mouseDown) {
        this.props.setCells([cell], this.props.brush);
      }
    }
  }
}

function mapStateToProps(state: Store): StateProps {
  return {
    brush: state.map.brush,
    mapData: state.map.map,
    mouse: state.map.mouse,
    tool: state.map.tool,
  }
}

export default connect(mapStateToProps, { setMousePos, setCells, mouseDown, mouseUp })(Map);
