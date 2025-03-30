import React from 'react';
import './priceprediction.css'; // Import the CSS file

const PricePrediction = ({ url }) => {
    const plantImages = [
        "https://indianpotato.com/wp-content/uploads/2025/02/Potato-Price-Jan-2025-final-scaled.jpg"]
      return (
        <div className="graph-container">
          {plantImages.map((image, index) => (
            <div key={index} className="graph-card">
              <img src={image} alt={`Plant ${index + 1}`} className="graph-image" />
            </div>
          ))}
        </div>
      );
    };
export default PricePrediction;/* plantCard.css */

