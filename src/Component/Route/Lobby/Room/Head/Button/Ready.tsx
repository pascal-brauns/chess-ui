import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import { Check } from '@material-ui/icons';

export type Props = {
  disabled: boolean;
  onClick: () => void;
};

const Ready: React.FC<Props> = ({ onClick, disabled }) => (
  <Tooltip title='Ready' arrow>
    <span>
      <IconButton
        disabled={disabled}
        onClick={onClick}>
        <Check/>
      </IconButton>
    </span>
  </Tooltip>
);

export default Ready;