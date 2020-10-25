import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
 
function Login() {
    const history = useHistory(); //algo de react router
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault(); //not refreshing
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(error => alert(error.message));

    }
    return (
        <div className="login">
            <Link to="/">
                <img
                alt="imgLogoFormLogin"
                className="login__logo"
                src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    
                    <button
                    type="submit" 
                    onClick={signIn}
                    className="login__signInButton">Sing In</button>
                </form>

                <p>By signing-in you agree to the amazon fake clone conditions of use & sale. please see our privacy notice , our cookies notice and our interest-based ads notice.</p>

                <button className="login__registerButton" onClick={e => history.push("/register")}>Create your Amazon Account</button>
                
                
            </div>
        </div>
    )
}

export default Login
