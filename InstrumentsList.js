import React from 'react';

// Sample data for musical instruments
const instrumentsData = [
  { id: 1, name: 'Guitar', price: '$500', description: 'Acoustic guitar for beginners' },
  { id: 2, name: 'Piano', price: '$1000', description: 'Digital piano with weighted keys' },
  { id: 3, name: 'Drums', price: '$800', description: 'Full drum set for rock enthusiasts' }
];

// Component for displaying individual instrument details
const InstrumentItem = ({ instrument }) => {
  return (
    <div className="instrument">
      <img src={instrument.imageUrl} alt={instrument.name} />
      <h3>{instrument.name}</h3>
      <p><strong>Price:</strong> {instrument.price}</p>
      <p><strong>Description:</strong> {instrument.description}</p>
    </div>
  );
};
// Component for displaying the list of instruments
const InstrumentsList = () => {
  return (
    <div className="instruments-list">
      <h2>Available Instruments</h2>
      {instrumentsData.map(instrument => (
        <InstrumentItem key={instrument.id} instrument={instrument} />
      ))}
    </div>
  );
};
export default InstrumentsList;


