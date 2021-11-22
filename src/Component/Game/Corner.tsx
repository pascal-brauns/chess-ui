import React from 'react';

export type Props = {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
};

const Corner: React.FC<Props> = ({ children, vertical, horizontal }) => (
  <span style={{
    position: 'absolute',
    [vertical]: 16,
    [horizontal]: 16
  }}>
    {children}
  </span>
);

export default Corner;