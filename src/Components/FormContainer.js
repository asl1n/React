import React, { useState } from 'react';
import './FormContainer.css'; 

const FormContainer = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const handleLoginClick = () => {
    setIsLoginActive(true);
  };

  const handleSignupClick = () => {
    setIsLoginActive(false);
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLoginActive ? 'login' : 'signup'}`}>{isLoginActive ? 'Login' : 'Signup'}</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLoginActive} readOnly />
          <input type="radio" name="slide" id="signup" checked={!isLoginActive} readOnly />
          <label htmlFor="login" className="slide login" onClick={handleLoginClick}>Login</label>
          <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}>Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form action="#" className={`login ${isLoginActive ? 'active' : ''}`}>
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">Not a member? <a href="#" onClick={handleSignupClick}>Signup now</a></div>
          </form>
          <form action="#" className={`signup ${!isLoginActive ? 'active' : ''}`}>
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Confirm password" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
