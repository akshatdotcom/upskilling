// SignUpPage.js
import React from 'react';
import './stylingSignUp.css';

const SignUpPage = () => {
  return (
    <div className="signup-container">
                <h2>Sign Up</h2>
                <p>Welcome to our community! Create your account below:</p>
          
                <form className="signup-form">
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                  </div>
          
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                  </div>
          
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                  </div>
          
                  <button type="submit" className="signup-btn">Sign Up</button>
                </form>
              </div>
  );
};

export default SignUpPage;
