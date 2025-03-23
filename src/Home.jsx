import React from 'react';
import { Link } from 'react-router-dom';
import AutoIrrigation from './autoIrrigation';
import PlantCard from './plantCard';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className='home'>
      <main className="main">
        <AutoIrrigation />
        {/* <PlantCard/> */}
      </main>
    </div>
  );
};

export default Home;