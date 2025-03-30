import React from 'react';
import './PricePrediction.css';
import priceImage from './price.png'; // Import the local image

const PricePrediction = () => {
  return (
    <div className="graph-container">
      <div className="graph-card">
        <img src={priceImage} alt="Price Prediction Graph" className="graph-image" />
      </div>
    </div>
  );
};

export default PricePrediction;