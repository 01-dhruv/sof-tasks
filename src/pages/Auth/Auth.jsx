import React, { useState } from 'react'
import icon from '../../assets/logo.jpg'
import './Auth.css'
import AboutAuth from './AboutAuth'

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, login } from "../../actions/auth";


const Auth = ({theme}) => {
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    // setName("");
    // setEmail("");
    // setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault()  
    console.log({name, email, password})  

    
    if(!email && !password){
        alert('Enter Email and Password')
    }
    if(isSignup){
        if(!name){
            alert('Enter a Name to Continue')
        }
        dispatch(signup({name, email, password}, navigate))
    }
    else{
        dispatch(login({email, password}, navigate))
    }
  }


  const txt = `auth-section ${theme.weather === 'Clear' && theme.timeOfDay === 'day' ? 'weather-clear' : 'weather-bad'}`;
  const txt1 = `auth-container-2 ${theme.weather === 'Clear' && theme.timeOfDay === 'day' ? 'weather-clear' : 'weather-bad'}`;
  // const formtxt = `text ${theme.weather === 'Clear' && theme.timeOfDay === 'day' ? 'clear' : 'bad'}`;



  return (
    // <section className="auth-section">
    <section className={txt}>
      {isSignup && <AboutAuth />}
      {/* <div className="auth-container-2"> */}
      <div className={txt1}>
        { !isSignup && <img src={icon} alt="stack overflow" className="login-logo" />}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" id="name" name="name" onChange={ (e) => {setName(e.target.value)} }/>
            </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email"  onChange={ (e) => {setEmail(e.target.value)} }/>
          </label>

          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password?
                </p>
              )}
            </div>
            <input type="password" name="password" id="password"  onChange={ (e) => {setPassword(e.target.value)} }/>
          </label>
          { isSignup && (
                        <label htmlFor="check" style={{fontSize: '13px'}}>
                            <input type="checkbox" id="check"/>
                            <p>Opt-in to receive occasional<br />product updates, user research invitations,<br />company announcements, and digests.</p>
                        </label>
                    )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
          {isSignup && (
                        <p style={{color: '#666767', fontSize: '13px'}}>
                            By clicking “Sign up”, you agree to our 
                            <span style={{color: "#007ac6"}}> terms of<br />service</span>, 
                            <span style={{color: "#007ac6"}}> privacy policy </span>and 
                            <span style={{color: "#007ac6"}}> cookie policy</span>
                        </p>
                    )}

        </form>

        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button type="button" className="handle-switch-btn"  onClick={handleSwitch}>
            {isSignup ? "Log in" : "sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;