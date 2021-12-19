import React from 'react';
import Instructor from './Instructor';
import * as Image from 'Image';
import Step from './Step';
import { Typography } from '@material-ui/core';
import * as Type from 'Type';
import { Color } from 'chess-processor';
import * as Grid from 'chess-processor/build/Library/Grid';

export type Props = {
  turn: Type.Chess.Color;
  pick: Type.Chess.Field;
  hover: Type.Chess.Field;
  actions: Type.Chess.Action[];
};

const Turn: React.FC<Props> = ({ actions, pick, turn, hover }) => (
  <Instructor>
    <Step
      title='Turn'
      background={turn}/>
    {pick?.piece && (
      <Step
        title='Pick'
        background={Color.opposite(turn)}>
        <img src={Image.Piece.url(pick.piece.type, pick.piece.color)} width={48}/>
      </Step>
    )}
    {!pick?.piece && hover?.piece?.color === turn && (
      <Step
        title='Pick'
        background={Color.opposite(hover.piece.color)}>
        <img src={Image.Piece.url(hover.piece.type, hover.piece.color)} width={48}/>
      </Step>
    )}
    {pick?.piece && (
      <>
        {(
          hover &&
          !hover?.piece &&
          actions.map(action => {
            switch (action.type) {
              case 'move': return action.to;
              case 'pick': return action.field.index;
              case 'promotion': return action.move.to.index;
              case 'castling': return action.king.to;
            }
          }).includes(hover?.index)
        ) && (
          <Step
            title='Move'
            background={Color.field(
              Grid.Position.cartesian(hover.index)
            )}>
            <Typography style={{
              color: Color.opposite(
                Color.field(
                  Grid.Position.cartesian(hover.index)
                )
              )
            }}>
              {['A', 'B', 'C', 'D', 'E', 'F', 'G'][Grid.Position.cartesian(hover.index).x]}
              {[8, 7, 6, 5, 4, 3, 2, 1][Grid.Position.cartesian(hover.index).y]}
            </Typography>
          </Step>
        )}
        {hover?.piece?.color === Color.opposite(turn) && (
          <Step
            title='Hit'
            background={Color.opposite(hover.piece.color)}>
            <img
              src={Image.Piece.url(hover.piece.type, hover.piece.color)}
              width={48}/>
          </Step>
        )}
      </>
    )}
  </Instructor>
);

export default Turn;