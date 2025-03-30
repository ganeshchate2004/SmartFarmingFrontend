import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/authform');
    setIsMenuOpen(false); // Close menu after logout
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="https://cdn.dribbble.com/userupload/2915463/file/original-7a5ba76f0bd3711d5d83a7eb94df956a.jpg?resize=2048x1536&vertical=center" alt="Logo" />
      </div>
      
      {/* Hamburger Menu */}
      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <nav className="nav">
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/predictdisease" className="nav-link" onClick={() => setIsMenuOpen(false)}>Predicted Disease</Link>
          </li>
          <li>
            <Link to="/plantprediction" className="nav-link" onClick={() => setIsMenuOpen(false)}>Plant Health</Link>
          </li>
          <li>
            <Link to="/priceprediction" className="nav-link" onClick={() => setIsMenuOpen(false)}>Price Prediction</Link>
          </li>
          <li>
            <Link to="/medicine" className="nav-link" onClick={() => setIsMenuOpen(false)}>Medicine</Link>
          </li>
          <li>
            <Link to="/fertiliser" className="nav-link" onClick={() => setIsMenuOpen(false)}>Fertiliser</Link>
          </li>
          <li>
            <Link to="/ourfarm" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Farm</Link>
          </li>
          <li>
            {token ? (
              <button onClick={handleLogout} className="nav-link logout-button">
                Logout
              </button>
            ) : (
              <Link to="/authform" className="nav-link" onClick={() => setIsMenuOpen(false)}>Signup / Login</Link>
            )}
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;