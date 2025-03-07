import React, { useState } from 'react';

const DatePicker = ({ selectedDate, onDateChange }) => {
  const [date, setDate] = useState(selectedDate || '');

  const handleChange = (event) => {
    setDate(event.target.value);
    onDateChange(event.target.value);
  };

  return (
    <input 
      type="date" 
      value={date} 
      onChange={handleChange} 
    />
  );
};

export default DatePicker;