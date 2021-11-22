import React from 'react';
import { Fab } from '@material-ui/core';
import { Undo as UndoIcon } from '@material-ui/icons';

export type Props = {
  disabled: boolean;
  onClick: () => void;
};

const Undo: React.FC<Props> = ({ disabled, onClick }) => (
  <Fab
    disabled={disabled}
    onClick={onClick}>
    <UndoIcon/>
  </Fab>
);

export default Undo;