// import React from 'react'
// import Auth from './pages/Auth/Auth'
// import Home from './pages/Home/Home'
// import AskQuestion from './pages/AskQuestion/AskQuestion'
// import { Route, Routes } from 'react-router-dom'
// import Questions from './pages/Questions/Questions'
// import DisplayQuestions from './pages/Questions/DisplayQuestions'
// import Tags from './pages/Tags/Tags'
// import Users from './pages/Users/Users'
// import UserProfile from './pages/UserProfile/UserProfile'

// const MyRoutes = () => {
//   return (
//     <div>
//         <Routes>
//           <Route path='/' component={Home}/>
//           <Route path='/auth' component={Auth}/>
//           <Route path='/questions' component={Questions}/>
//           <Route path='/AskQuestion' component={AskQuestion}/>
//           <Route path='/Questions/:id' component={DisplayQuestions}/>
//           <Route path='/Tags' component={Tags}/>
//           <Route path='/Users' component={Users}/>
//           <Route path='/Users/:id' component={UserProfile}/>

//         </Routes>

//     </div>
//   )
// }

// export default MyRoutes



import React from 'react'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import { Route, Routes } from 'react-router-dom'
import Questions from './pages/Questions/Questions'
import DisplayQuestions from './pages/Questions/DisplayQuestions'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import Space from './pages/Space/Space'
import Videos from './pages/Videos/Videos'
import LoginHist from './pages/LoginHist/LoginHist'

const MyRoutes = ({ theme }) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home theme={theme}/> } /> {/* Use "element" instead of "Component" */}
        <Route path='/auth' element={<Auth theme={theme}/>} />
        <Route path='/questions' element={<Questions theme={theme}/>} />
        <Route path='/AskQuestion' element={<AskQuestion theme={theme}/>} />
        <Route path='/Questions/:id' element={<DisplayQuestions theme={theme}/>} />
        <Route path='/Tags' element={<Tags theme={theme}/>} />
        <Route path='/Users' element={<Users theme={theme}/>} />
        <Route path='/Users/:id' element={<UserProfile theme={theme}/>} />
        <Route path='/videos' element={<Videos theme={theme}/>} />
        <Route path='/space' element={<Space  theme={theme}/>} />
        <Route path='/loginHist' element={<LoginHist  theme={theme}/>} />
      </Routes>
    </div>
  )
}

export default MyRoutes
