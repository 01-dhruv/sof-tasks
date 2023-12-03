import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UserProfile.css";

import React, { useState } from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const UserProfile = (theme) => {

  const { id } = useParams();
  const users = useSelector( (state) => (state.usersReducer));
  const currentProfile = users.filter((user) => user._id === id)[0];
  const User = useSelector( (state) => (state.currentUserReducer))
  const [Switch, setSwitch] = useState(false)
  console.log(currentProfile)
  console.log(User)


  return (
      <div className="home-container-1">
        <LeftSideBar theme={theme}/>
        <div className="home-container-2">
          <section>
            <div className="user-details-container">

              <div className="user-details">
               
                <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="60px">
                    {currentProfile?.name.charAt(0).toUpperCase()}
                </Avatar>


                <div className="user-name">
                  <h1>{currentProfile?.name}</h1>
                  <p> <FontAwesomeIcon icon={faBirthdayCake}/> Joined{" "}{moment(currentProfile?.joinedOn).fromNow()} </p>
                </div>
              </div>

                  {User?.result._id === id && (<button type="button" onClick={() => setSwitch(true)} className="edit-profile-btn">
                    <FontAwesomeIcon icon={faPen}/> Edit Profile
                  </button>)}
                </div>
                
                
                <>
            {Switch ? (
              <EditProfileForm currentUser={currentProfile} setSwitch={setSwitch}/>
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>

          </section>
        </div>
      </div>
  )
}

export default UserProfile