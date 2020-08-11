import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { color: "", width: 50, height: 50 };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addBox({...formData});
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="color">color:</label>
        <input
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="width">width:</label>
        <input
          id="width"
          type="range"
          max="100"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
        <label htmlFor="height">height:</label>
        <input
          id="height"
          type="range"
          max="100"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </p>
      <button>Add Box</button>
    </form>
  )
};

export default NewBoxForm;