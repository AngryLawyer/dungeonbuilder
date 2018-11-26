import * as React from 'react';
import { Button } from 'react-foundation';

interface OwnProps {
  element: React.ReactElement;
}

type Props = OwnProps;

export default class BrushButton extends React.PureComponent<Props> {
  public render () {
    return (
      <Button>
      </Button>
    );
  }
}
