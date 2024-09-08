import React from 'react';
import "../css/login.css";
import google from "../assets/svg/google.svg";
import bubble from "../assets/svg/bubble.svg"
import dot from "../assets/svg/dots.svg"
import Checkbox from '../components/commont components/checkbox';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const handleClick = () => {
       navigate('/dashboard')
    };
    return (

        <div className="mainContainer">
            <img src={bubble} className='bubble' />
            <img src={dot} className='dot' />
            <text className="signUpHeading">Log In</text>
            <div className="div-button-login" onClick={handleClick}>
                <img src={google} className='google'></img>
                <text className="button-font">Sign In With Google</text>
            </div>
            <div className='or-divider'>
            <div className='separator'></div>
            <text className='or-text'>OR</text>
            <div className='separator'></div>
            </div>
            
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
             <Checkbox />
            
            <div className="login-button" onClick={handleClick}>
           <text className="button-font-white">Sign In</text>
            </div>
            <div className='account-message'>
                <text className='question-text'>Already have an account? </text>
              <text className='question-text-button'><Link to="/signup">Sign Up</Link>  </text>
            </div>
        </div>
    );

}
export default Login