import React from 'react';
import { Color } from 'chess-processor';
import * as Grid from 'chess-processor/build/Library/Grid';

export type Props = {
  index: number;
};

const ID: React.FC<Props> = ({ index }) => (
  <div style={{
    position: 'absolute',
    left: 8,
    top: 4,
    color: Color.opposite(
      Color.field(Grid.Position.cartesian(index))
    )
  }}>
    {index + 1}
  </div>
);

export default ID;