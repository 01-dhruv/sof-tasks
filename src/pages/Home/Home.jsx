import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import '../../App.css'
import HomeMainBar from '../../components/HomeMainBar/HomeMainBar'

const Home = ({ theme }) => {
  return (
    <div className="home-container-1">
        <LeftSideBar theme={theme}/>
      
      <div className="home-container-2">
        <HomeMainBar theme={theme}/>
        <RightSideBar theme={theme}/>
      </div>
    </div>
    )
}

export default Home