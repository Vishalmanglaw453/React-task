import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    };
  
    const validatePassword = () => {
      const passwordRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
        setPasswordError(
          "Password must be at least 8 characters long and contain letters and numbers"
        );
      } else {
        setPasswordError("");
      }
    };
  
    return (
      <form className=' mt-5'
        onSubmit={(e) => {
          e.preventDefault();
          validateEmail();
          validatePassword();
        }}
      >
        <div className='  d-flex  gap-5 mt-3'>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
          />
          {emailError && <span>{emailError}</span>}
        </div>
        <div className='  d-flex  gap-5 mt-3 mb-3'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={validatePassword}
          />
          {passwordError && <span>{passwordError}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
}

export default Form