import React from "react";

import "./Users.css";
import LeftSidebar from "../../components/LeftSideBar/LeftSideBar";
import UsersList from "./UsersList";
import { useLocation } from "react-router-dom";

const Users = ({theme}) => {

    const location = useLocation();
    console.log(location) 

  return (
    <div className="home-container-1">
      <LeftSidebar theme={theme}/>
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList theme={theme}/>
      </div>
    </div>
  );
};

export default Users;