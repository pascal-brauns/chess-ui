import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

export type Props = {
  onClick: () => void;
};

const Leave: React.FC<Props> = ({ onClick }) => (
  <Tooltip title='Leave' arrow>
    <IconButton onClick={onClick}>
      <ExitToApp/>
    </IconButton>
  </Tooltip>
);

export default Leave;