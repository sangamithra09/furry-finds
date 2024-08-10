import React, { useState } from 'react';
import '../login/Login.css';
import person from '../../Assets/person.png';
import passwordd from '../../Assets/passwordd.png';
import { Link, useNavigate } from 'react-router-dom';
import { loginHandler } from './Axios/LoginHandler';
import log from '../../Assets/log.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const Navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        try {
            const loginSuccess = await loginHandler(email, password);
            if (loginSuccess) {
                Navigate('/');
            } 
            else {
                setError('Your email or password is invalid.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred during login. Please try again.');
        }
    };

    return (
        <div className='loginpage'>
            <div className="login-container">
                <div className="form-section">
                    <div className='image-container'>
                        <img src={log} alt="login" />
                    </div>
                    <div className="form-content">
                        <div className="header" id="header">
                            <div className="text" id="text" style={{color:"black"}}>Login</div>
                            <div className="underline" id="underline"></div>
                        </div>
                        <form onSubmit={handleSubmit} className="inputs" id="inputs">
                            <div className='signform'>
                                <div className='username'>Email Address</div>
                                <div className="input">
                                    <img src={person} alt="User icon" />
                                    <input
                                        type="text"
                                        placeholder="Enter Your Email Address"
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
                            </div>
                            {error && <div className="error-message" style={{color:"red", marginLeft:"90px"}}>{error}</div>}
                            <div className="submitcontainer1" id="submit-container1">
                                <button type="submit" className="submit1" id="submit1">Login</button>
                            </div>
                        </form>
                        <div className="submitcontainer2" id="submit-container2">
                            <div className="forgot-password">
                                Don't have an account? <span><Link to='/signup'>Sign Up!</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
