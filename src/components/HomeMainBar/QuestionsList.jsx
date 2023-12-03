import React from 'react'
import Questions from './Questions'
const QuestionsList = ({questionsList, theme}) => {
    // console.log(questionsList)
    return (
        <>
            {
            questionsList.map((question) => (
                <Questions question={question} key={question._id} theme={theme}/>
            ))
            }
        </>
    )
}

export default QuestionsList
