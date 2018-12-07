import * as React from 'react';
import { Button, Colors } from 'react-foundation';

import { ToolType } from '../types';

interface OwnProps {
  tool: ToolType;
  element: React.ComponentType;
  onClick: (tool: ToolType) => void;
  selected?: boolean;
}

type Props = OwnProps;

export class Tool extends React.PureComponent<Props> {
  public render() {
    return (
      <Button color={this.props.selected ? Colors.PRIMARY : Colors.SECONDARY} onClick={this.onClick}>
        <this.props.element/>
      </Button>
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.tool);
  }
}
