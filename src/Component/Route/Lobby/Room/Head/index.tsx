import React from 'react';
import { CardHeader } from '@material-ui/core';
import * as Button from './Button';

export type Props = {
  title: string;
  onLeave: () => void;
  onReady: () => void;
  onShare: () => void;
  disabled: {
    ready: boolean;
    share: boolean;
  };
};

const Head: React.FC<Props> = ({ title, disabled, onLeave, onReady, onShare }) => (
  <span style={{
    width: '100%',
    height: '16%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    boxSizing: 'border-box',
    paddingRight: '4%'
  }}>
    <CardHeader
      title={title}
      subheader='Please select your color'/>
    <span style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Button.Share
        disabled={disabled.share}
        onClick={onShare}/>
      <div style={{ width: 8 }}/>
      <Button.Leave
        onClick={onLeave}/>
      <div style={{ width: 8 }}/>
      <Button.Ready
        disabled={disabled.ready}
        onClick={onReady}/>
    </span>
  </span>
);

export default Head;