import React, { useState } from 'react';
import '../signup/Signup.css';
import { Link } from 'react-router-dom';
import mail from '../../Assets/mail.png';
import passwordd from '../../Assets/passwordd.png';
import person from '../../Assets/person.png';
import beagle from '../../Assets/Group 10 (1).png'; 

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic herem
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="signup-container">
                    {/* <div className='brand'>FLURRY FINDS!</div> */}

      <div className="image-section">
        <img src={beagle} alt="Decorative" className="side-image" />
      </div>
      <div className="form-section">
        <div className="container">
          <div className="header" id="header">
            <div className="text" id="text">Sign Up</div>
            <div className="underline" id="underline"></div>
          </div>
          <form onSubmit={handleSubmit} className="inputs" id="inputs">
            <div class='password'>UserName</div>
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
            <div className='password'>Email Address</div>
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
            <div className='password'>Password</div>
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
            <div className="submitcontainer1" id="submit-container1">
              <button type="submit" className="submit1" id="submit1">Sign Up</button>
            </div>
          </form>
          <div className="submitcontainer2" id="submit-container2">
            <div className="forgot-password">
              Already have an account? <span><Link to="/Login">Login!</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
