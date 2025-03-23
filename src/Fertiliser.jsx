import React from 'react';
 import './fertiliser.css' // Import CSS for styling

const Fertiliser = () => {
  // Array of fertiliser data
  const fertilisers = [
    {
      name: 'Nitrogen-Based Fertiliser',
      nutrient: 'Nitrogen (N)',
      description: 'Recommended for leafy plants to promote vigorous growth.',
    },
    {
      name: 'Phosphorus-Based Fertiliser',
      nutrient: 'Phosphorus (P)',
      description: 'Recommended for root development and flowering.',
    },
    {
      name: 'Potassium-Based Fertiliser',
      nutrient: 'Potassium (K)',
      description: 'Recommended for overall plant health and disease resistance.',
    },
    {
      name: 'NPK Balanced Fertiliser',
      nutrient: 'Nitrogen, Phosphorus, Potassium (NPK)',
      description: 'A balanced fertiliser for general plant growth and health.',
    },
    {
      name: 'Organic Compost',
      nutrient: 'Multiple Nutrients',
      description: 'Improves soil structure and provides slow-release nutrients.',
    },
  ];

  return (
    <div className="fertiliser">
      <h2>Fertiliser Management</h2>
      <p>Here you can manage and track fertiliser usage for your plants.</p>
      <div className="fertiliser-container">
        {fertilisers.map((fertiliser, index) => (
          <div key={index} className="fertiliser-card">
            <h3>{fertiliser.name}</h3>
            <div className="nutrient-tag">
              <span>{fertiliser.nutrient}</span>
            </div>
            <p>{fertiliser.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fertiliser;