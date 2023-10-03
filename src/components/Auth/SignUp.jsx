// import { createUserWithEmailAndPassword } from "firebase/auth"
// import React, { useState } from "react";
// import {auth} from "../firebase"



// const SignUp = () => {

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('');

//     //creat func that will handel logic for when form is submitted 
//     const SignUp = (e) =>  {
//         e.preventDefault(); //so formsubmit will not reload/wont lose state
//         createUserWithEmailAndPassword (auth, email, password )
//         .then((userCredential) => {
//             console.log(userCredential);
//         })
//         .catch((error) =>  {
//             console.log(error);
//         });
//     };
//     return (
//         <div className="sign-in-countainer">
//             <form onSubmit={SignUp}>
//                 <h1> Create Account</h1>
//                 <input type="email" placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 ></input>
//                 <input type="password" placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 ></input>
//                 <button type=" submit ">Sign Up</button>
//             </form>
//         </div>
//     );
// };


// export default SignUp;

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignUpForm = styled.form`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0074cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005aaa;
  }
`;

const SignOutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #cc0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #aa0000;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-top: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

const SignInMessage = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

const SignOutMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-top: 10px;
`;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [signInError, setSignInError] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(false);

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setSignInError(null);
        setSignUpSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          setSignInError("Email already in use. Please use a different email.");
        } else {
          setSignInError("Sign-up failed. Please try again later.");
        }
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSignInSuccess(true);
        setSignInError(null);
      })
      .catch((error) => {
        console.log(error);
        setSignInSuccess(false);
        if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
          setSignInError("Incorrect email or password. Please try again.");
        } else {
          setSignInError("Sign-in failed. Please try again later.");
        }
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setSignUpSuccess(false);
        setSignInSuccess(false);
        setSignOutSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={signUp}>
        <Title>Create Account</Title>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton type="submit">Sign Up</SubmitButton>
        {signUpSuccess && <SuccessMessage>Sign up successful</SuccessMessage>}
        {signInError && <ErrorMessage>{signInError}</ErrorMessage>}
      </SignUpForm>

      <SignInMessage>
        {signInSuccess && `You've successfully signed in as ${email}`}
      </SignInMessage>

      {signOutSuccess && <SignOutMessage>Sign out successful</SignOutMessage>}

      {(signInSuccess || signUpSuccess) && (
        <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
      )}
    </SignUpContainer>
  );
};

export default SignUp;