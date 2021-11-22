import React from 'react';

const Vertical: React.FC = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column'
  }}>
    {[1, 2, 3, 4, 5, 6, 7, 8].reverse().map(label => (
      <div style={{
        height: 96,
        width: '1.75rem',
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

export default Vertical;