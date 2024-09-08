import React from 'react';
import "../css/signup.css";
import google from "../assets/svg/google.svg";
import bubble from "../assets/svg/bubble.svg"
import dot from "../assets/svg/dots.svg"
import { Link } from 'react-router-dom';

function SignUp() {

    const handleClick = () => {
        alert('DivButton clicked!');
      };
    return (
        
        <div className="mainContainer">
          <img src={bubble}  className='bubble'/>
          <img src={dot}  className='dot'/>
          <text className="signUpHeading">Sign Up</text>
          <text className="title">Name*</text>
           <input 
        type="text" 
        className="textfield"
        placeholder="Enter your name"
      />
     
      <text className="title">Email Address*</text>
       <input 
        type="email"
        className="textfield"
        placeholder="Enter your email"
      />
      <text className="title">Password*</text>
       <input 
        type="password"
        security="true"
        className="textfield"
        placeholder="Enter Password"
        
      />
      <div className="div-button" onClick={handleClick}>
        <img src={google} className='google'></img>
        <text className="button-font">Sign Up With Google</text>
      </div>
      <div className="login-button" onClick={handleClick}>
      <Link to="/dashboard"><text className="button-font-white">Get Started</text></Link>
      </div>
      <div className='account-message'>
        <text className='question-text'>Already have an account? </text>
       <Link to="/login"><text className='question-text-button'>Sign In</text></Link> 
      </div>
        </div>
    );

}
export default SignUp