import React from 'react';
import { Typography, Slider, Tooltip } from '@material-ui/core';
import * as Type from 'Type';

export type Props = {
  value: Type.Singleplayer.Difficulty;
  onChange: (next: Type.Singleplayer.Difficulty) => void;
}

const Difficulty: React.FC<Props> = ({ value, onChange }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  }}>
    <Tooltip title={'Foreseeing turns (AI)'}>
      <Typography gutterBottom>
        Difficulty
      </Typography>
    </Tooltip>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      boxSizing: 'border-box',
      width: 240,
      paddingLeft: 16,
      paddingRight: 16
    }}>
      <span style={{
        width: 64,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        {value}
      </span>
      <Slider
        value={value}
        onChange={(_, next: Type.Singleplayer.Difficulty) => onChange(next)}
        step={1}
        marks
        min={0}
        max={10}/>
    </div>
  </div>
);

export default Difficulty;