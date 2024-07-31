import React, { useState } from 'react';
import '../login/Login.css';
import person from '../../Assets/person.png';
import beagle from '../../Assets/Group 10 (1).png';
import passwordd from '../../Assets/passwordd.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            
            {/* <div className='brand'>FURRY FINDS!</div> */}
                <img src={beagle} alt='decorative' className="sidee-image" />

            <div className="formm-section">
                <div className="container">
                    <div className="header" id="header">
                        <div className="text" id="text">Login</div>
                        <div className="underline" id="underline"></div>
                    </div>
                    <div className='username'>Email Address</div>
                    <form onSubmit={handleSubmit} className="inputs" id="inputs">
                        <div className="input">
                            <img src={person} alt="User icon" />
                            <input
                                type="text"
                                placeholder="Enter Your Email Address"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                            <button type="submit" className="submit1" id="submit1">Login</button>
                        </div>
                    </form>
                    <div className="submitcontainer2" id="submit-container2">
                        <div className="forgot-password">
                            Don't have an account? <span><Link to="/Signup">Sign Up!</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
