import React, { useState } from 'react';

const CheckboxGroup = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="yes"
          checked={selectedOption === 'yes'}
          onChange={handleOptionChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="no"
          checked={selectedOption === 'no'}
          onChange={handleOptionChange}
        />
        No
      </label>
    </div>
  );
};

export default CheckboxGroup;
