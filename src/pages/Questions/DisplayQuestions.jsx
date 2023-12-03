import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestions = ({theme}) => {
  return (    
    <div className='home-container-1'>
        <LeftSideBar theme={theme}/>
        <div className='home-container-2'>
        <QuestionsDetails/>
        <RightSideBar theme={theme}/>
        </div>
    </div>
  )
}

export default DisplayQuestions