import React, { useState} from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import {Alert} from "react-bootstrap";
import Login from '../Login/Login';

const Signup = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [navigate,setNavigate] = useState(false);
    const [flag,setFlag] = useState(false);
    const [login,setLogin] = useState(true)

function handleSubmit(e) {
    e.preventDefault();

    if(!name || !email || !password) {
        setFlag(true)
    }else {
        setFlag(false);
        localStorage.setItem("Email",JSON.stringify(email));
        localStorage.setItem("Password",JSON.stringify(password));
        console.log("Saved in Local Storage")
        setLogin(!login)
    }
}


function handleClick() {
    setLogin(!login)
}
   
  return (
      <div className='signup'>
        {login ?(
          <form onSubmit={handleSubmit}>
              <div className='registr'>
                  <h1 style={{ textAlign: 'center' }}>Please Register</h1>
                  <div className='login'>
                      <input 
                        type='text'
                        placeholder='Name' 
                        onChange={(e) => setName(e.target.value)}
                        />
                  </div>
                  <div className='email'>
                      <input 
                        type='email' 
                        placeholder='Email'
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                  </div>
                  <div className='password'>
                      <input 
                        type='password'
                        placeholder='Password' 
                        onChange={(e) => setPassword(e.target.value)}
                       />
                  </div>
                  <div className='btn-style'>
                      <button type='submit' className='btn-signup'>Registr</button>
                  </div>
                  <p style={{cursor:"pointer"}} onClick={handleClick}>Already registered {""} login in?</p>
                  {flag && (
                    <Alert color="primary" variant="danger" className='eror'>
                        Please Fill Every Field
                    </Alert>
                  )}
              </div>
          </form>
        ):(
         <Login name={name}/>
        )}
      </div>
  )
}

export default Signup
