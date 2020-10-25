import React, { useState } from 'react';
import { auth, db } from "./firebase";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";

function Register() {
    const history = useHistory(); //algo de react router
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');

    const other = () => {
        auth.currentUser.updateProfile({
            displayName:name
        })
    }

    const register = e =>{
        e.preventDefault();//if not will refresh -> will lose data
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if(auth){
                    other();
                    history.push("/");
                }
            })
            .catch(error => alert(error.message));
    }

    

    return (
        <div className="register">
            <Link to="/">
                <img
                alt="imgLogoFormRegister"
                className="register__logo"
                src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="register__container">
                <h1>Create Account</h1>
                <form>
                    <h5>Name</h5>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>


                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    
                    <button
                    type="submit" 
                    onClick={register}
                    className="register__registerButton">Create your Amazon account</button>
                </form>

                <p>By creating an account, you agree to the <u>Terms of Use</u> and <u>Privacy Notice</u> of amazon.com.</p>
                <br></br>
                <p>Do you already have an account? <Link to = "/login">Log in</Link></p>
            </div>
            

        </div>
    )
}


export default Register
