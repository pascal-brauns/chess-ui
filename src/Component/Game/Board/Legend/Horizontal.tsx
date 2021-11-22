import React from 'react';

const Horizontal: React.FC = () => (
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
        fontWeight: 'bold'
      }}>
        {label}
      </div>
    ))}
  </div>
);

export default Horizontal;