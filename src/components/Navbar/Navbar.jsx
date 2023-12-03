import React, { useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import search from '../../assets/search.svg'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'
import { useSelector, useDispatch} from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser'
import decode from 'jwt-decode'




const Navbar = () => {

  // var User = null
  // const User = JSON.parse(localStorage.getItem('Profile'))
  // console.log(User)

//   const handleLogOut = () => {
//     dispatch({ type: "LOGOUT"})
//     navigate('/')
//     dispatch(setCurrentUser(null))
// }
const dispatch = useDispatch()
const navigate = useNavigate()
const User = useSelector( (state) => (state.currentUserReducer))


const handleLogOut = useCallback(() => {
  dispatch({ type: "LOGOUT" });
  navigate('/');
  dispatch(setCurrentUser(null));
}, [dispatch, navigate]);




  useEffect( () =>{
    const token = User?.token
    if(token){
        const decodedToken = decode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()){
            handleLogOut()
        }
    }
    dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
  }, [User?.token, handleLogOut, dispatch])







  return (
    <nav className='main-nav'>
    <div className='navbar'>
      <div className="navbar-1">

        <Link to= '/' className='nav-item nav-btn res-nav'>
            <img src={logo} width='150px' height='50px' alt="Unavailable" />
        </Link>
        <Link to= '/' className='nav-item nav-btn res-nav'>About</Link>
        <Link to= '/' className='nav-item nav-btn res-nav'>Products</Link>
        <Link to= '/' className='nav-item nav-btn res-nav'>For Teams</Link>
        <Link to= '/space' className='nav-item nav-btn res-nav'>Community Space</Link>
        <Link to= '/videos' className='nav-item nav-btn res-nav'>Videos</Link>
        <Link to= '/LoginHist' className='nav-item nav-btn res-nav'>Login History</Link>
        <form>
            <img src={search} width='15px' alt="Unavailable" className='search-icon'/>
            <input type="text" placeholder='Search'/>
        </form>
      </div>


        <div className="navbar-2">
          {User == null ? 
              <Link to = '/auth' className='nav-item nav-links'>Log in</Link> :
              <>
                <Avatar backgroundColor='lightblue' px='10px' py='10px' ><Link to = {`/Users/${User?.result?._id}`} style={{color:'white', textDecoration : 'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
              <button className='nav-item nav-links' onClick={handleLogOut}>Log Out</button>
              </>
          }
        </div>

    </div>
</nav>
    )
}

export default Navbar








