import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log({ email, password })
    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
  
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }
  
    const handleApi = () => {
      console.log({ email, password})
      axios.post('https://reqres.in/api/login', {
        email: email,
        password: password
      }).then(result => {
        console.log(result.data)
        alert('success')
      })
        .catch(error => {
          alert('service error')
          console.log(error)
        })
    }
  
    return (
    <div className="login-section">
        <div className="login-section1">
            <div className="card">
                <div className="card-section1-message">
                    <h2>Welcome Back</h2><br/>
                    <p>Welcome back! Please enter details.</p> <br/>
                </div>
                <div className="section">
                    <div className="section-email"><p>Email</p><input value={email} onChange={handleEmail} type="text" placeholder="Enter your email"/> <br /></div>
                    <div className="section-password"><p>Password</p><input className="section-password-secret" value={password} onChange={handlePassword} type="text" placeholder="........."/> <br /></div>

                    <div className="section-button"><button className="button1" onClick={handleApi} >Login</button></div>
                    {/* <div className="section-button"><button className="button2" onClick={handleApi} >Sign with Google</button></div> */}
                </div>  
                < div className="section-last">Don't have an account? <Link to={"/Signup"}><div className="section-signup">Sign up</div></Link></div>
            </div>
        </div>

        <div className="login-section2">
            <img src="images/Section@2x.png"></img>
        </div>
    </div>
    );
  }
  
  export default Login;