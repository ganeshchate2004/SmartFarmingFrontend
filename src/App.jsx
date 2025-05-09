import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Fertiliser from './Fertiliser';
import Medicine from './Medicine';
import Profile from './Profile';
import About from './About';
import Nav from './Nav';
import PlantPrediction from './PlantPrediction';
import PricePrediction from './PricePrediction';
import PredictDisease from './PredictDisease';
import AuthForm from './AuthForm';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component
import Footer from './Footer';
import PlantCard from './PlantCard';





const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Nav />
        <main className="main-content">
          <Routes>
            {/* Your existing routes */}
            <Route path="/authform" element={<AuthForm />} />
            <Route path="/about" element={<About />} />
            
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/predictdisease" element={<PredictDisease />} />
          <Route path="/plantprediction" element={<PlantPrediction url="http://127.0.0.1:5000/" />} />
          <Route path="/priceprediction" element={<PricePrediction url="https://indianpotato.com/wp-content/uploads/2025/02/Potato-Price-Jan-2025-final-scaled.jpg" />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/fertiliser" element={<Fertiliser />} />
          <Route path="/profile" element={<Profile user={{ name: 'John Doe', username: 'johndoe123', password: '********', phoneNo: '+1234567890' }} />} />
          <Route path="/ourfarm" element={<PlantCard/>} />
            </Route>
          </Routes>
        </main>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;