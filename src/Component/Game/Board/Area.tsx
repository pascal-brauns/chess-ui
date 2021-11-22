import React from 'react';
import Field from './Field';
import * as Type from 'Type';

export type Props = {
  value: Type.Chess.Board;
  disabled: boolean;
  rotate?: boolean;
  actions: Record<number, Type.Chess.Action>;
  onClick: (action: Type.Chess.Action) => void;
  onMouseEnter: (field: Type.Chess.Field) => void;
};

const style: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: Array(8).fill('96px').join(' '),
  gridTemplateRows: Array(8).fill('96px').join(' ')
};

const Area: React.FC<Props> = ({
  value, disabled, actions, rotate, onClick, onMouseEnter
}) => (
  <div style={style}>
    {/*
      NOTE:
        This seems to trigger TypeScript heuristics for complex/deep types.
        The issue might be related to the @sinclair/typbox package which is used to define types that can be checked during runtime (JSON Schema).
    */}
    {/* @ts-ignore */}
    {value.map((field, index) => (
      <Field
        key={JSON.stringify([field, actions[index], disabled])}
        value={field}
        action={actions[index]}
        rotate={rotate}
        disabled={disabled}
        onClick={() => onClick(actions[index])}
        onMouseEnter={() => onMouseEnter(field)}/>
    ))}
  </div>
);

export default Area;