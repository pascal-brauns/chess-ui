import React from 'react';
import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import * as Image from 'Image';
import * as Type from 'Type';
import * as Chess from 'chess-processor';
import * as Grid from 'chess-processor/build/Library/Grid';

export type Props = {
  value: Type.Chess.Action;
  last: boolean;
};

const url = (action: Type.Chess.Action) => {
  const piece = Chess.Action.piece(action);
  return Image.Piece.url(piece.type, piece.color);
};

const capitalize = (text: string) => (
  text[0].toUpperCase() + text.substring(1)
);

const primary = (piece: Type.Chess.Piece) => (
  [piece.color, piece.type]
    .map(capitalize)
    .join(' ')
);

const secondary = ({ x, y }: Type.Chess.Grid.Cartesian) => (
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'][x] +
  ['8', '7', '6', '5', '4', '3', '2', '1'][y]
);

const cartesian = (action: Type.Chess.Action) => (
  Grid.Position
    .cartesian(Chess.Action.target(action))
);

const Action: React.FC<Props> = ({ value, last }) => (
  <ListItem button ref={element => last && element?.scrollIntoView()}>
    {value.type !== 'castling' && (
      <>
        <ListItemAvatar>
          <img
            src={url(value)}
            width={32}/>
        </ListItemAvatar>
        <ListItemText
          primary={primary(Chess.Action.piece(value))}
          secondary={secondary(cartesian(value))}/>
      </>
    )}
  </ListItem>
);

export default Action;