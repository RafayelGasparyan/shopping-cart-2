import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import {Alert} from "react-bootstrap"

const Login = ({name}) => {
    const [emailLog,setEmailLog] = useState("");
    const [passwordLog,setPasswordLog] = useState("");
    const [flag,setFlag] = useState(false);
    const [home,setHome] = useState(true) 
    
  function handleLogin(e) {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g,"");
    let pass = localStorage.getItem("Password").replace(/"/g,"");

    if(!emailLog || !passwordLog) {
      setFlag(true);
      console.log("Empty");

    } else if (passwordLog !== pass || emailLog !== mail) {
      setFlag(true)

    } else {
      setHome(!home);
      setFlag(false)
    }
  }

  return (
      <div className='signup'>
        {home ? (
          <form onSubmit={handleLogin}>
              <div className='login-page'>
                  <h1 style={{ textAlign: 'center' }}>Please Login</h1>
                  <div className='login-user'>
                    <input 
                        type='email'
                        onChange={(e)=>setEmailLog(e.target.value)}
                    />
                  </div>
                  <div className='password-user'>
                    <input 
                        type='password'
                        onChange={(e)=>setPasswordLog(e.target.value)}
                    />
                  </div>
                  <div className='btn-style'>
                    <button type='submit' className='btn-signup'>Login</button>
                    {flag && (
                      <Alert color="primary" variant="danger">
                        Please Fill Correct info
                      </Alert>
                    )}
                  </div>
              </div>
          </form>
          ):(
           <div className='user-name-style'>
             <span>Helloooo {name}</span>
           </div>
          )}
      </div>
  )
}

export default Login
