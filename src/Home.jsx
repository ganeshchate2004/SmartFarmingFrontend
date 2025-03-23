import React from 'react';
import AutoIrrigation from './AutoIrrigation';
import './home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className='home'>
      <main className="main">
        <AutoIrrigation />
      </main>
    </div>
  );
};

export default Home;