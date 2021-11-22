import React from 'react';
import { IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

export type Props = {
  text: string;
  onBack: () => void;
};

const Title: React.FC<Props> = ({ text, onBack }) => (
  <span style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }}>
    <IconButton
      onClick={onBack}
      size='small'>
      <ArrowBack/>
    </IconButton>
    <div style={{ width: 8 }}/>
    {text}
  </span>
);

export default Title;