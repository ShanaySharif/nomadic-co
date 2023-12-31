// import { signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth } from "../firebase";

// const SignIn = ({ toggleForm }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="sign-in-container">
//       <form onSubmit={signIn}>
//         <h1>Log In</h1>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Log In</button>
//       </form>
//       <p>
//         Don't have an account?{" "}
//         <button onClick={toggleForm}>Sign Up</button>
//       </p>
//     </div>
//   );
// };

// export default SignIn;

import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import styled from "styled-components";


import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

// Configure session persistence
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Session persistence successfully set
  })
  .catch((error) => {
    console.log(error);
  });

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignInForm = styled.form`
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
  border-radius: 200px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: burlywood;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #6F4E37;
  }
`;

const SignUpText = styled.p`
  margin-top: 20px;
`;

const SignUpButton = styled.button`
  background: none;
  border: none;
  color: #6F4E37;
  cursor: pointer;

  &:hover {
    text-decoration: overline;
  }
`;

const SuccessMessage = styled.p`
  color: burlywood;
  font-weight: bold;
  margin-top: 10px;
`;

const ErrorMessage = styled.p`
  color: #6F4E37;
  font-weight: bold;
  margin-top: 10px;
`;

const SignInMessage = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;


const SignIn = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(false);

  const navigate = useNavigate();


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setSignInError(null);
        setSignInSuccess(true);
        navigate('/');
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

  return (
    <SignInContainer>
      <SignInForm onSubmit={signIn}>
        <Title>Log In</Title>
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
        <SubmitButton type="submit">Log In</SubmitButton>
        {signInError && <ErrorMessage>{signInError}</ErrorMessage>}
        {signInSuccess && <SuccessMessage>Logged in successfully</SuccessMessage>}
      </SignInForm>
      <SignUpText>
        Don't have an account?{" "}
        <SignUpButton onClick={toggleForm}>Sign Up</SignUpButton>
      </SignUpText>
    </SignInContainer>
  );
};

export default SignIn;