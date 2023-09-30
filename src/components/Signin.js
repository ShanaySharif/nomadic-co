// New import below!
import React, { useState } from "react";
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import ReactDOM from 'react-dom';
// import SignIn from "./pages/SignIn"



function SignIn(){  
  // New code below!
  const [signUpSuccess, setSignUpSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // New code below!
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
      })
      .catch((error) => {
        // New code below!
        setSignUpSuccess(`There was an error signing up: ${error.message}!`)
      });
  }

  return (
    <React.Fragment>
      <h1>Sign up</h1>
      {/* New code below! */}
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>
    </React.Fragment>
  );
}

export default SignIn