import React from "react";
import "./profile.css"
const Profile = ({ user }) => {
    return (
      <div className="profile-card">
        <h1> 
          {user.name}
        </h1>
        <div className="profile-details">

          <div className="detail-item">
            <span className="label">Username:</span>
            <span className="value">{user.username}</span>
          </div>
          <div className="detail-item">
            <span className="label">Password:</span>
            <span className="value">{user.password}</span>
          </div>
          <div className="detail-item">
            <span className="label">Phone No:</span>
            <span className="value">{user.phoneNo}</span>
          </div>
        </div>
      </div>
    );
  };

  export default Profile;