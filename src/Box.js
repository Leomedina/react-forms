import React from 'react';

const Box = ({ id, color, width, height }) => {
  const styling = {
    backgroundColor: color,
    width: `${width}px`,
    height: `${height}px`
  };

  return (
    <div style={styling}></div>
  )
};
export default Box;