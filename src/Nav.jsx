import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css'; // Import the CSS file

const Nav = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Check if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token on logout
    navigate('/authform'); // Redirect to the login page
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="https://cdn.dribbble.com/userupload/2915463/file/original-7a5ba76f0bd3711d5d83a7eb94df956a.jpg?resize=2048x1536&vertical=center" alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/predictdisease" className="nav-link">Predicted Disease</Link>
          </li>
          <li>
            <Link to="/plantprediction" className="nav-link">Plant Health</Link>
          </li>
          <li>
            <Link to="/priceprediction" className="nav-link">Price Prediction</Link>
          </li>

          <li>
            <Link to="/medicine" className="nav-link">Medicine</Link>
          </li>
          <li>
            <Link to="/fertiliser" className="nav-link">Fertiliser</Link>
          </li>
          <li>
            <Link to="/ourfarm" className="nav-link">Our Farm</Link>
          </li>

          {/* <li>
            <Link to="/profile" className="nav-link">Profile</Link>
          </li> */}
          <li>
            {token ? (
              <button onClick={handleLogout} className="nav-link logout-button">
                Logout
              </button>
            ) : (
              <Link to="/authform" className="nav-link">Signup / Login</Link>
            )}
          </li>
          <li>
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;