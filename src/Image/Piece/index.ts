import * as King from './King';
import * as Queen from './Queen';
import * as Rook from './Rook';
import * as Bishop from './Bishop';
import * as Knight from './Knight';
import * as Pawn from './Pawn';

import * as Type from 'Type';

type Piece = Type.Chess.Piece['type'];
type Color = Type.Chess.Color;

export const url = (piece: Piece, color: Color): string => {
  switch (piece) {
    case 'bishop': return Bishop[color];
    case 'king': return King[color];
    case 'knight': return Knight[color];
    case 'pawn': return Pawn[color];
    case 'queen': return Queen[color];
    case 'rook': return Rook[color];
    default: return null;
  }
}