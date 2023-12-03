import React from "react";
import { useSelector } from "react-redux";

import User from "./User";
import "./Users.css";

const UsersList = ({theme}) => {
  const users = useSelector((state) => state.usersReducer);
  console.log(users)

  // const containerClass = `user-list-container ${theme.weather === 'Clear' && theme.timeOfDay === 'day' ? 'clear2' : 'bad2'}`;


  return (
    <div className='user-list-container'>
      {users.map((user) => (
        <User user={user} key={user?._id} theme={theme}/>
      ))}
    </div>
  );
};

export default UsersList;