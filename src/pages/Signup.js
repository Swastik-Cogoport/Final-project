import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import './Signup.css';

export default function Signup() {
    const [username, setUserName] = useState('')
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const handleUserName = (e) => {
        setUserName(e.target.value)
    }
    const handleFullName = (e) => {
        setFullName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }    
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }  
    const handleApi = () => {
      console.log({ username, fullname, email, password})
      axios.post('https://reqres.in/api/login', {
        username: username,
        fullname : fullname,
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
        <div className="login-section1" style={{zoom:"0.7",paddingTop:"100px"}}>
            <div className="card">
                <div className="card-section1-message">
                    <h2>Welcome Back</h2><br/>
                    <p>Welcome back! Please enter details.</p> <br/>
                </div>
                <div className="section">
                    <div className="section-email"><p>Email</p><input value={email} onChange={handleEmail} type="text" placeholder="Enter your email"/> <br /></div>
                    <div className="section-password"><p>Password</p><input className="section-password-secret" value={password} onChange={handlePassword} type="text" placeholder="........."/> <br /></div>
                    <div className="section-password"><p>Username</p><input className="section-password-secret" value={username} onChange={handleUserName} type="text" placeholder="Enter your username"/> <br /></div>
                    <div className="section-password"><p>Fullname</p><input className="section-password-secret" value={fullname} onChange={handleFullName} type="text" placeholder="Enter your fullname"/> <br /></div>
                    <div className="section-button"><button className="button1" onClick={handleApi} >Signup</button></div>
                    {/* <div className="section-button"><button className="button2" onClick={handleApi} >Sign with Google</button></div> */}
                </div>  
                {/* < div className="section-last">Don't have an account? <Link to={"/Signup"}><div className="section-signup">Sign up</div></Link></div> */}
            </div>
        </div>

        <div className="login-section2">
            <img src="images/Section@2x.png"></img>
        </div>
    </div>
    );
  }
  