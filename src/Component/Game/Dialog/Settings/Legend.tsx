import React from 'react';
import { Switch, Tooltip, Typography } from '@material-ui/core';

export type Props = {
  value: boolean;
  onChange: (next: boolean) => void;
};

const Legend: React.FC<Props> = ({ value, onChange }) => {
  console.log(value);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }}>
      <Tooltip title={'Foreseeing turns (AI)'}>
        <Typography gutterBottom>
          Legend
        </Typography>
      </Tooltip>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        boxSizing: 'border-box',
        paddingLeft: 16,
        paddingRight: 16
      }}>
        <Switch
          color='primary'
          checked={value}
          onChange={event => onChange(event.target.checked)}/>
      </div>
    </div>
  );
}

export default Legend;