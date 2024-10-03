import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Login.css'
import Footer from '../components/footer';
import Header from '../components/header';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');

    
    
    // Usage example:
    

    const handleSubmit = async (e) => {
        e.preventDefault();
       const res = await fetch("http://127.0.0.1:8080/user/verifyEmployee", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:email, password:password})});
        if (res.ok){
            var f = await res.json();
            console.log(f);
            localStorage.setItem("user", JSON.stringify(f));
            navigate("/home");
            return;
        };
    }


    return (
      <>
        {/* <Header /> */}
        <div className="container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Email">Email:</label>
            <input type="email" id="Email" name="Email" className="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" className="password" value={password} onChange={(e) => setPassWord(e.target.value)} required/>
              <br></br>
            <select id="selectRole" required>
              <option value="default" disabled selected>Sign in as</option>
              <option value="option1">user</option>
              <option value="option2">admin</option>
            </select><br/><br/>
            <input type="submit" value="Login"/>
          </form>
        </div>
        {/* <Footer /> */}
      </>
      
    );
}

export default Login;