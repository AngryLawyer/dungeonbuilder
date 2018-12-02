import * as React from 'react';
import { Button, Colors } from 'react-foundation';

import { BrushType } from '../types';

interface OwnProps {
  brush: BrushType;
  element: React.ComponentType;
  onClick: (brush: BrushType) => void;
  selected?: boolean;
}

type Props = OwnProps;

export class Brush extends React.PureComponent<Props> {
  public render() {
    return (
      <Button color={this.props.selected ? Colors.PRIMARY : Colors.SECONDARY} onClick={this.onClick}>
        <this.props.element/>
      </Button>
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.brush);
  }
}
