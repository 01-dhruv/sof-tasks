import React from "react";
import { Link } from "react-router-dom";

import "./Users.css";

const User = ({ user, theme }) => {

  const containerClass = `user-profile-link ${theme.weather === 'Clear' && theme.timeOfDay === 'day' ? 'clear2' : 'bad2'}`;


  return (
    <Link to={`/Users/${user._id}`} className={containerClass}>
      <h3>{user.name.charAt(0).toUpperCase()}</h3>
      <h5>{user.name}</h5>
    </Link>
  );
};

export default User;