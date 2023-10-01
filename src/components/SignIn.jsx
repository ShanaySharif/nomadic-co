import React, {useState} from "react";



const SignIn = () => {
  const [email, setEmail] = useState ('')
  const [password, setPassword]
    return (
        <div className="sign-in-countainer">
            <form>
                <h1> Log In</h1>
                <input type="email" placeholder="Enter your email"></input>
            </form>
        </div>
    )



}