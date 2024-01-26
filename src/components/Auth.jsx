import { useState } from 'react';
import '../styles/Auth.css';
import logo from '../assets/images/logo.png';
import clouds from '../assets/images/clouds.png';
import google from '../assets/images/google.png';
const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [userType, setUserType] = useState('Class Beadle');
    /* beadle, instructor, administrator */
    const handleUserTypeChange = (user_type) => {
        setIsLogin(true);
        setUserType(user_type);
    }
    return (
        <div className="auth-container">
            <div className="left">
                <h1>Welcome to</h1>
                <img src={logo} className='logo' alt="magis" />
                <h1 className='app-name'>MAGIScribe</h1>
                <p className='text'>A cutting-edge online web application designed exclusively for Ateneo de Naga University to streamline attendance tracking processes for students, staff, and faculty members. Built with user convenience and efficiency in mind, MAGIScribe offers a comprehensive solution to manage attendance records seamlessly.</p>
                { isLogin &&
                    <div className="direct-links">
                        <p>
                            {(userType == 'Class Beadle') ? 'INSTRUCTOR' : 'BEADLE'}
                            {userType == 'Class Beadle' && <a onClick={() => handleUserTypeChange('Instructor')}> HERE</a>}
                            {userType != 'Class Beadle' && <a onClick={() => handleUserTypeChange('Class Beadle')}> HERE</a>}
                        </p>
                        <p className="vertical-line">|</p>
                        {/* <p>ADMINISTRATOR<a href="/"> HERE</a></p> */}
                        <p>
                            {(userType == 'Administrator') ? 'INSTRUCTOR' : 'ADMINISTRATOR'}
                            {userType == 'Administrator' && <a onClick={() => handleUserTypeChange('Instructor')}> HERE</a>}
                            {userType != 'Administrator' && <a onClick={() => handleUserTypeChange('Administrator')}> HERE</a>}
                        </p>
                    </div>
                }

                { !isLogin &&
                    <div className="direct-links">
                        <p>
                            Already have an account?
                            <a onClick={() => setIsLogin(true)}> Sign In</a>
                        </p>
                    </div>
                }
            </div>
         
            <div className="right">
                <div className="background">
                    <img src={clouds} alt="clouds" className='clouds'/>
                </div>
                <div className="content-wrapper">
                    { isLogin &&
                        <div className="content">
                            <div className="top">
                                <h1>Sign in as </h1>
                                <h1 style={{ color: '#0A499D'}} className='user-type'>{userType}</h1>
                            </div>
                            <form action="">
                                <div className="fill-answer">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="text" placeholder='Enter your email'/>
                                </div>
                                <div className="fill-answer">
                                    <label htmlFor="email">Password</label>
                                    <input id="password" type="password" placeholder='Enter your password'/>
                                </div>
                                <a href='/' className='forgot'>Forgot your password?</a>
                                <button type="submit" className='sign-in button'>Sign In</button>
                            </form>
                            <div className="or-section">
                                <div className="line"></div>
                                <p>OR</p>
                                <div className="line"></div>
                            </div>
                            <button className='button gbox'>
                                <img src={google} width="20" alt="google" />
                                Sign In with GBox
                            </button>
                            <p className='no-account'>Don't have an account? <span><a onClick={() => setIsLogin(false)}>Sign up</a></span></p>
                        </div>
                    }


                    { !isLogin &&
                        <div className="content" style={{ marginTop: '0.5rem'}}>
                            <div className="top">
                                <h1>Create your</h1>
                                <h1 style={{ color: '#2293F9'}}>account</h1>
                            </div>
                            <form action="">
                                <div className="fill-answer role">
                                    <label htmlFor="email">I am a</label>
                                    <input id="email" type="text" placeholder='Select your role'/>
                                </div>
                                <div className="fill-answer">
                                    <label htmlFor="email">Name</label>
                                    <input id="email" type="text" placeholder='Enter your name'/>
                                </div>
                                <div className="fill-answer">
                                    <label htmlFor="email">Password</label>
                                    <input id="password" type="password" placeholder='Enter your email'/>
                                </div>
                                <div className="fill-answer">
                                    <label htmlFor="email">Password</label>
                                    <input id="email" type="password" placeholder='Enter your password'/>
                                </div>
                                <div className="fill-answer">
                                    <label htmlFor="email">Confirm Password</label>
                                    <input id="password" type="password" placeholder='Confirm your password'/>
                                </div>
                                <button type="submit" className='sign-in button' style={{ marginTop: '0.5rem'}}>Sign Up</button>
                            </form>
                            
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Auth;
