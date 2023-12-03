import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Questions = ({question, theme}) => {

  const containerClass = `display-question-container ${theme.weather === 'Clear' && theme.timeOfDay === 'day' ? 'clear' : 'bad'}`;


  return (
    <>
    {/* {console.log(question)} */}
    <div className={containerClass}>

      <div className='display-votes-ans'>
      <p style={{fontSize: "20px"}}>{question.upVote.length - question.downVote.length}</p>
        <p>Votes</p>
      </div>

      <div className='display-votes-ans'>
        <p>{question.noOfAnswers}</p>
        <p>Answers</p>
      </div>

      <div className='display-question-details'>
        <Link to={`/Questions/${question._id}`} className='question-title-link'>{question.questionTitle}</Link>
        <div className="display-tags-time">

          <div className="display-tags">
            {
              question.questionTags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))
            }
          </div>

          <div className="display-time">
            asked {moment(question.askedOn).fromNow()} {question.userPosted}
          </div>



        </div>

      </div>


    </div>
    </>
  )
}

export default Questions











// import React from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';

// const Questions = ({ question, theme }) => {
//   // Determine the class for display-question-container based on the weather
//   const containerClass = theme.weather === 'Clear' ? 'display-question-container-clear' : 'display-question-container-bad';

//   return (
//     <>
//       <div className={containerClass}>
//         <div className='display-votes-ans'>
//           <p style={{ fontSize: "20px" }}>{question.upVote.length - question.downVote.length}</p>
//           <p>Votes</p>
//         </div>

//         <div className='display-votes-ans'>
//           <p>{question.noOfAnswers}</p>
//           <p>Answers</p>
//         </div>

//         <div className='display-question-details'>
//           <Link to={`/Questions/${question._id}`} className='question-title-link'>{question.questionTitle}</Link>
//           <div className="display-tags-time">
//             <div className="display-tags">
//               {question.questionTags.map((tag) => (
//                 <p key={tag}>{tag}</p>
//               ))}
//             </div>
//             <div className="display-time">
//               asked {moment(question.askedOn).fromNow()} {question.userPosted}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Questions;
