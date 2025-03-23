


import React from 'react';

const PlantPrediction = ({ url }) => {
  return (
    <div style={{ width: '100%', height: '100vh', border: 'none' }}>
      <iframe
        src={url}
        title="Embedded Website"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen
      />
    </div>
  );
};

export default PlantPrediction;