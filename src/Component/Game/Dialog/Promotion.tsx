import React from 'react';
import { Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import * as Image from 'Image';
import * as Type from 'Type';
import { Action } from 'chess-processor';

export type Props = {
  value: Type.Chess.Promotion;
  onChange: (next: Type.Chess.Promotion) => void;
};

type Piece = Type.Chess.Piece;

const types: Piece['type'][] = [
  'bishop',
  'knight',
  'queen',
  'rook',
];

const Promotion: React.FC<Props> = ({ value, onChange }) => (
  <Dialog open={Boolean(value)} fullWidth PaperProps={{
    style: {
      width: 240
    }
  }}>
    <DialogTitle>
      Choose a piece
    </DialogTitle>
    <List>
      {types.map(type => (
        <ListItem
          button
          onClick={() => onChange({
            ...value,
            piece: { ...Action.piece(value.move), type }
          })}
          key={type}>
          {value && (
            <ListItemAvatar>
              <img
                src={Image.Piece.url(type, Action.piece(value.move).color)}
                height={48}/>
            </ListItemAvatar>
          )}
          <ListItemText
            primary={type[0].toUpperCase() + type.substring(1)}/>
        </ListItem>
      ))}
    </List>
  </Dialog>
);

export default Promotion;