import { signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react";
import {auth} from "../firebase"



const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    //creat func that will handel logic for when form is submitted 
    const signIn = (e) =>  {
        e.preventDefault(); //so formsubmit will not reload/wont lose state
        signInWithEmailAndPassword (auth, email, password )
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) =>  {
            console.log(error);
        });
    };
    return (
        <div className="sign-in-countainer">
            <form onSubmit={signIn}>
                <h1> Log In</h1>
                <input type="email" placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input type="password" placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type=" submit ">Log In</button>
            </form>
        </div>
    );
};

export default SignIn;