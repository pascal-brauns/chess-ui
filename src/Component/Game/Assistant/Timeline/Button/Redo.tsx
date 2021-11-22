import React from 'react';
import { Fab } from '@material-ui/core';
import { Redo as RedoIcon } from '@material-ui/icons';

export type Props = {
  disabled: boolean;
  onClick: () => void;
};

const Redo: React.FC<Props> = ({ disabled, onClick }) => (
  <Fab
    disabled={disabled}
    onClick={onClick}>
    <RedoIcon/>
  </Fab>
);

export default Redo;