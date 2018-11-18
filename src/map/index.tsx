import * as React from 'react';

import { floor, wall } from './draw';
import { CELL_SIZE, MapData } from './types';

interface ExternalProps {
  mapData: MapData;
}

type Props = ExternalProps;

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
    return <canvas ref={this.canvas} width={mapData.width * CELL_SIZE} height={mapData.height * CELL_SIZE}/>;
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
        /*
        ctx.fillStyle = cell ? 'black' : 'white';
        ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);*/
      })
    }
  }
}

export default Map;
