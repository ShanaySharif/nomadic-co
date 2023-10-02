import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react";
import {auth} from "../firebase"



const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    //creat func that will handel logic for when form is submitted 
    const SignUp = (e) =>  {
        e.preventDefault(); //so formsubmit will not reload/wont lose state
        createUserWithEmailAndPassword (auth, email, password )
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) =>  {
            console.log(error);
        });
    };
    return (
        <div className="sign-in-countainer">
            <form onSubmit={SignUp}>
                <h1> Create Account</h1>
                <input type="email" placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input type="password" placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type=" submit ">Sign Up</button>
            </form>
        </div>
    );
};


export default SignUp;