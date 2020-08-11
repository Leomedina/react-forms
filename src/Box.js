import React from 'react';

const Box = ({ id, color, width, height, removeBox }) => {
  const styling = {
    backgroundColor: color,
    width: `${width}px`,
    height: `${height}px`
  };

  return (
    <>
      <div style={styling}></div>
      <button onClick={() => removeBox(id)}>X</button>
    </>
  );
};
export default Box;