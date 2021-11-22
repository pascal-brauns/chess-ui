import React from 'react';

export type Props = {
  rotate?: boolean;
}

const Horizontal: React.FC<Props> = ({ rotate }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '1.75rem',
    paddingRight: '1.75rem',
  }}>
    {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(label => (
      <div style={{
        width: 96,
        height: '1.75rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        transform: rotate ? 'rotate(180deg)': null
      }}>
        {label}
      </div>
    ))}
  </div>
);

export default Horizontal;