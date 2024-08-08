import React, { useState } from 'react';
import '../signup/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import mail from '../../Assets/mail.png';
import passwordd from '../../Assets/passwordd.png';
import person from '../../Assets/person.png';
import { handleSignup } from './Axios/SignupHandler';
import log from '../../Assets/log.jpg'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic herem
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    if (handleSignup(username, email, password)) {
      //handle loged in state
      Navigate('/')
    }
  };

  return (
    <div className="signup-container">
      <div className="form-section">
        <div className="image-container">
          <img src={log} alt="Signup" />
        </div>
        <div className="form-content">
          <div className="header">Sign Up</div>
          <div className="underline"></div>
          <form onSubmit={handleSubmit} className="inputs">
            <div className="input-group">
              <label className="input-label">Username</label>
              <div className="input">
                <img src={person} alt="User icon" />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <div className="input">
                <img src={mail} alt="Email icon" />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Password</label>
              <div className="input">
                <img src={passwordd} alt="Password icon" />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="submit-container">
              <button type="submit" className="submit">Sign Up</button>
            </div>
          </form>
          <div className="login-redirect">
            Already have an account? <Link to="/Login">Login!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

      export default Signup;
