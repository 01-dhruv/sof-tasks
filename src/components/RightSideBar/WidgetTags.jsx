// const WidgetTags = ({theme}) => {

//     const tags = ['c', 'css', 'express', 'firebase', 'html', 'java', 'javascript','mern','mongodb','mysql','next.js','node.js','php','python','reactjs']

//     return (
//         <div className="widget-tags">
//             <h4>Watched tags</h4>
//             <div className="widget-tags-div">
//                 {tags.map(tag => (
//                     <p key={tag}>{tag}</p>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default WidgetTags







import React from 'react';

const WidgetTags = ({ theme }) => {
  const tags = ['c', 'css', 'express', 'firebase', 'html', 'java', 'javascript', 'mern', 'mongodb', 'mysql', 'next.js', 'node.js', 'php', 'python', 'reactjs'];
  
  const widgetTagsClasses = `widget-tags ${theme.weather === 'Clear' && theme.timeOfDay === 'day' ? 'weather-clear' : 'weather-bad'}`;
  
  
  return (
    <div className={widgetTagsClasses}>
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {tags.map(tag => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
}

export default WidgetTags;

