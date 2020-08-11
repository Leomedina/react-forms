import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const INITIAL_STATE = [
    { id: uuidv4(), width: 30, height: 40, color: "green" },
    { id: uuidv4(), width: 20, height: 20, color: "black" }
  ];

  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (newBox) => {
    setBoxes(boxes => [
      ...boxes, { id: uuidv4(), ...newBox }]);
  };

  const removeBox = (id) => {
    const newArray = boxes.filter(box => box.id !== id);
    setBoxes(newArray);
  }

  return (
    <>
      <div>
        {boxes.map(({ id, width, color, height }) =>
          <Box id={id} width={width} height={height} color={color} removeBox={removeBox} />
        )}
      </div>
      <NewBoxForm addBox={addBox} />
    </>
  );
};

export default BoxList