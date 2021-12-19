import React from 'react';
import { List } from '@material-ui/core';
import Move from './Move';
import * as Type from 'Type';

export type Props = {
  value: Type.Chess.Timeline;
}

const Chronicle: React.FC<Props> = ({ value }) => (
  <List style={{
    width: 240,
    maxHeight: 320,
    overflowY: 'scroll'
  }}>
    {/*
      NOTE:
        This seems to trigger TypeScript heuristics for complex/deep types.
        The issue might be related to the @sinclair/typbox package which is used to define types that can be checked during runtime (JSON Schema).
    */}
    {/* @ts-ignore */}
    {[...value.history].reverse().map((action, index) => (
      <Move
        key={JSON.stringify(action)}
        value={action}
        last={index === value.history.length -1}/>
    ))}
  </List>
);

export default Chronicle;