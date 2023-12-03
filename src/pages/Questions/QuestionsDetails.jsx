import React, { useState }from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import uplogo from '../../assets/sort-up-solid.svg'
import downlogo from '../../assets/sort-down-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Questions.css'
import DisplayAnswer from './DisplayAnswer'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import { deleteQuestion, postAnswer, voteQuestions } from '../../actions/question'


const QuestionsDetails = () => {


    const questionsList = useSelector(state => state.questionsReducer)
    console.log(questionsList)
    const {id} = useParams()
    
    // var questionsList = [{ 
    //     _id: '1',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 2,
    //     questionTitle: "What the hell?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: "kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // },{ 
    //     _id: '2',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What the hell?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: "kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // },{ 
    //     _id: '3',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What the hell?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: "kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }]

    const [Answer, setAnswer] = useState('')
    const User = useSelector( (state) => (state.currentUserReducer))
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    // const url = 'https://sof-backend2.onrender.com'
    const url = 'https://sof-tasks-backend.onrender.com'
    // const url = 'http://localhost:5000'


    const handlePostAns = (e, answerLength) => {
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to answer a question')
            Navigate('/Auth')
        }
        else{
            if(Answer === ''){
                alert('Enter an Answer before Submitting')
            }
            else{
                dispatch(postAnswer({ id, noOfAnswers: answerLength+1, answerBody: Answer, userAnswered: User.result.name, userId: User?.result?._id }))
            }
        }
    }

    const handleShare = () =>{
        copy(url + location.pathname)
        alert('Url Copied to Clipboard : ' + url + location.pathname)
    }


    
    const handleDelete = () =>{
        dispatch(deleteQuestion(id, Navigate))
    }


    const handleUpVote = () =>{
        dispatch(voteQuestions(id, 'upVote', User.result._id))
    }
    const handleDownVote = () =>{
        dispatch(voteQuestions(id, 'downVote', User.result._id))
    }


  return (
        <div className="questions-details-page">
            {
                questionsList.data === null ?
                <h1>Loading...</h1> :
                <>
                    {   
                        questionsList.data.filter(question => question._id === id).map(question => (
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>

                            <div className='question-details-container-2'>
                                    <div className="question-votes">
                                        <img src={uplogo} alt="upvote" width='18' onClick={handleUpVote}/>
                                        <p>{question.upVote.length - question.downVote.length}</p>
                                        <img src={downlogo} alt="downvote" width='18' onClick={handleDownVote}/>
                                    </div>

                                    <div style={{width: '100%'}}>
                                        {/* <h2 className='question-body'>{question.questionTitle}</h2> */}
                                        <p className='question-body'>{question.questionBody}</p>
                                        <div className="question-details-tags">
                                            {
                                                question.questionTags.map( (tag) => (
                                                    <p key = {tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                            <button type='button' onClick={handleShare}>Share</button>
                                                {
                                                    User?.result?._id === question?.userId && (
                                                        <button type='button' onClick={handleDelete}>Delete</button>
                                                    )
                                                }
                                            </div>
                                            <div>
                                            <p> asked {moment(question.askedOn).fromNow()}</p>
                                                <Link to={`/Users/${question.userId}`} className='user-link' style={{color: '#0086d8'}}>
                                                    <Avatar backgroundColor="Orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                        {question.userPosted}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                            </div>
                            {
                                question.noOfAnswers !== 0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} Answers</h3>
                                        <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>

                                    </section>
                                )
                            }


                            </section>


                            <section className='post-answer-container'>
                                <h3>Your Answer</h3>
                                <form onSubmit={ (e) => { handlePostAns(e, question.answer.length) } }>
                                    <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br />
                                    <input type="Submit" className='post-ans-btn' value="Post Your Answer"/>
                                </form>
                                <p>
                                    Browse Other Questions Tagged
                                    {
                                        question.questionTags.map( (tag) => (
                                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                        ))
                                    } or
                                    <Link to='/AskQuestion' style={{textDecoration: "None", color: "#009dff"}}> Ask Your Own Question</Link>

                                </p>
                            </section>

                        </div>
                        ))
                    }
                </>
            }

        </div>
    )
}

export default QuestionsDetails