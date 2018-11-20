import * as React from 'react';
import { connect } from 'react-redux';

import { toggleCell } from '../actions';
import { Store } from '../reducers';
import { floor, wall } from './draw';
import { CELL_SIZE, GridRef, MapData } from './types';

interface StateProps {
  mapData: MapData;
}

interface DispatchProps {
  toggleCell: typeof toggleCell;
}

type Props = StateProps & DispatchProps;

class Map extends React.PureComponent<Props> {
  private canvas: React.RefObject<HTMLCanvasElement>;

  public constructor (props: Props) {
    super(props);
    this.canvas = React.createRef();
  }

  public componentDidMount() {
    this.redraw(null, this.props);
  }

  public componentDidUpdate(oldProps: Props, props: Props) {
    this.redraw(oldProps, props);
  }

  public render () {
    const { mapData } = this.props;
    return <canvas ref={this.canvas} width={mapData.width * CELL_SIZE} height={mapData.height * CELL_SIZE} onClick={this.onClick}/>;
  }

  private redraw (oldProps: Props | null, props: Props) {
    const ctx = this.canvas.current!.getContext('2d');
    if (ctx) {
      const { mapData } = this.props;
      mapData.cells.forEach((cell, index) => {
        const x = index % mapData.width;
        const y = Math.floor(index / mapData.height);
        if (cell) {
          wall(ctx, x, y);
        } else {
          floor(ctx, x, y);
        }
      })
    }
  }

  private onClick = (event: React.MouseEvent) => {
    const cell = this.getGridRefFromClick(this.canvas.current!, event);
    this.props.toggleCell(cell);
  }

  private getGridRefFromClick(dom: HTMLElement, event: React.MouseEvent): GridRef {
    const bounds = dom.getBoundingClientRect();
    return {
      x: Math.floor((event.clientX - bounds.left) / CELL_SIZE),
      y: Math.floor((event.clientY - bounds.top) / CELL_SIZE),
    }

  }
}

function mapStateToProps(state: Store): StateProps {
  return {
    mapData: state.map
  }
}

export default connect(mapStateToProps, { toggleCell })(Map);
