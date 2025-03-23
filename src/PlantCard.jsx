import React from 'react';
import './plantCard.css';

const PlantCard = () => {
  const plantImages = [
    'https://c8.alamy.com/comp/BYRBTB/agriculture-field-of-mid-growth-red-potato-plants-in-full-bloom-near-BYRBTB.jpg','https://media.istockphoto.com/id/485922402/photo/potato-vegetable-with-tubers-and-leaves-in-ground.jpg?s=612x612&w=0&k=20&c=zn8bvAn54Ibwjwuk_MG1Wz3MxWJNfxQduKnzRkT3K1s=',
    'https://c8.alamy.com/comp/2DA3H1E/sprinkler-irrigation-system-on-a-farm-in-floresta-district-moldova-eastern-europe-2DA3H1E.jpg' ];

  return (
    <div className="plant-container">
      {plantImages.map((image, index) => (
        <div key={index} className="plant-card">
          <img src={image} alt={`Plant ${index + 1}`} className="plant-image" />
        </div>
      ))}
    </div>
  );
};

export default PlantCard;
