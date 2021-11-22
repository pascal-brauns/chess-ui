import React from 'react';

const Instructor: React.FC = ({ children }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    {children}
  </div>
);

export default Instructor;