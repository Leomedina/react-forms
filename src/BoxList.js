import React, { useState } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const INITIAL_STATE = [
    { id: 1, width: 30, height: 40, color: "green" },
    { id: 2, width: 20, height: 20, color: "black" },
  ];

  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (color, width, height) => {
    setBoxes(boxes => [
      ...boxes, { color, width, height }]);
  };

  return (
    <>
      <div>
        {boxes.map(({ id, width, color, height }) => <Box id={id} width={width} height={height} color={color} />)}
      </div>
      <NewBoxForm addBox={addBox} />
    </>
  );
};

export default BoxList