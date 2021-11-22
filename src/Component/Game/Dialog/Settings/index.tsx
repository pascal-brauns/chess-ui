import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import Difficulty from './Difficulty';
import Legend from './Legend';
import Title from './Title';
import * as Type from 'Type';

export type Props = {
  open: boolean;
  value: Type.Settings;
  onBack: () => void;
  onChange: (next: Type.Settings) => void;
}

const Settings: React.FC<Props> = ({ open, value, onBack, onChange }) => (
  <Dialog
    open={open}
    fullWidth
    maxWidth={'xs'}
    style={{
      zIndex: 2000,
      marginBottom: 196
    }}
    transitionDuration={{
      exit: 0
    }}>
    <DialogTitle>
      <Title
        text='Settings'
        onBack={onBack}/>
    </DialogTitle>
    <DialogContent>
      {value.type === 'singleplayer' && (
        <>
          <Difficulty
            value={value.difficulty}
            onChange={next => onChange({
              ...value,
              difficulty: next
            })}/>
          <div style={{ height: 8 }}/>
        </>
      )}
      <Legend
        value={value.legend}
        onChange={next => onChange({
          ...value,
          legend: next
        })}/>
    </DialogContent>
  </Dialog>
);

export default Settings;