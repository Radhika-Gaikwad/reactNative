import React, { useState, useEffect } from 'react';
import './App.css';

const TimeRangeSelector = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  useEffect(() => {
    console.log({
      selectedButtons,
      unselectedButtons: Array.from({ length: 25 }, (_, i) => i).filter(
        (time) => !selectedButtons.includes(time)
      ),
    });
  }, [selectedButtons]);

  const handleTimeClick = (time) => {
    setSelectedButtons((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  return (
    <div>
      <h3>Select Time</h3>
      <div className="time-buttons">
        {Array.from({ length: 25 }, (_, i) => (
          <button
            key={i}
            onClick={() => handleTimeClick(i)}
            className={selectedButtons.includes(i) ? 'selected' : ''}
          >
            {i}
          </button>
        ))}
      </div>
      <DisplaySelections selectedButtons={selectedButtons} />
    </div>
  );
};

const DisplaySelections = ({ selectedButtons }) => (
  <div>
    <h3>Selections</h3>
    <p>Selected Times: {selectedButtons.join(' ')}</p>
    <p>
      Unselected Times:{' '}
      {Array.from({ length: 25 }, (_, i) => i)
        .filter((time) => !selectedButtons.includes(time))
        .join(' ')}
    </p>
  </div>
);

export default TimeRangeSelector;
