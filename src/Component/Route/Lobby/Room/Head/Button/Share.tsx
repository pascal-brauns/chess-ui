import React from 'react';
import { IconButton } from '@material-ui/core';
import { Share as ShareIcon } from '@material-ui/icons';

export type Props = {
  disabled: boolean;
  onClick: () => void;
};

const Share: React.FC<Props> = ({ disabled, onClick }) => (
  <IconButton
    disabled={disabled}
    onClick={onClick}>
    <ShareIcon/>
  </IconButton>
);

export default Share;