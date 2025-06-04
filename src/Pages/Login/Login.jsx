import React, { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '../../Provider/AuthProvider'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'animate.css';

import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import NavBar from '../shared/NavBar/NavBar';
// import Footer from '../shared/footer/Footer';

import loginImage from '../../assets/others/authentication2.png'
import bgImage from '../../assets/others/authentication.png'


import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';


const Login = () => {


    const { signInUser, signInWithGoogle, signInWithGitHub, signInWithFacebook } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log('location in the login page', location)

    const [disabled, setDisabled] = useState(true)
    const from = location.state?.from?.pathname || "/";
    console.log('state in the location in login page',location.state);

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        // console.log('form submitted')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)


        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                // toast.success('Login successful! Welcome!', { autoClose: 3000 })
                Swal.fire({
                    title: "Login successful! Welcome!",
                    showClass: {
                        popup: `animate__animated animate__fadeInUp animate__faster`
                    },
                    hideClass: {
                        popup: `animate__animated animate__fadeOutDown animate__faster`
                    }
                });
                // navigate after login
                navigate(location?.state?.from || '/');
            })
            .catch(error => {
                console.error(error);
                toast.error('Login not successful. Please try again!', { autoClose: 3000 });
            });
    }

    const handleValidateCaptcha = (e) => {
        const captchaValue = e.target.value;
        console.log(captchaValue);

        if (validateCaptcha(captchaValue)) {
            setDisabled(false)
        }
        else {
            setDisabled(true);
        }
    }


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                toast.success('Google login successful! Welcome!', { autoClose: 3000 });
                // navigate after login
                navigate(location?.state?.from || '/');
            })
            .catch(error => {
                console.error(error);
                toast.error('Google login failed. Please try again!', { autoClose: 3000 });
            })
    }


    const handleGithubLogin = () => {
        signInWithGitHub()
            .then(result => {
                console.log(result.user)
                toast.success('Github login successful! Welcome!', { autoClose: 3000 });
                // navigate after login
                navigate(location?.state?.from || '/');
            })
            .catch(error => {
                console.error(error)
                toast.error('Github login failed. Please try again!', { autoClose: 3000 });
            })
    }

    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then(result => {
                console.log(result.user)
                toast.success('Facebook login successful! Welcome!', { autoClose: 3000 });
                // navigate after login
               navigate(location?.state?.from || '/');
            })
            .catch(error => {
                console.error(error)
                toast.error('Facebook login failed. Please try again!', { autoClose: 3000 });
            })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div>
                <div className="flex-col my-8 rounded-xl gap-2 hover:shadow-2xl"
                    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                    <div className='grid sm:grid-cols-1 md:grid-cols-2  mx-auto mt-5'>

                        {/* left side  */}

                        <div>
                            <img src={loginImage} alt="" />
                        </div>

                        {/* right side */}

                        <div className="pl-2 pr-4 md:pr-18 lg:pr-48 ">
                            <h1 className="text-4xl font-bold mx-auto text-center">Login</h1>

                            <form onSubmit={handleLogin} >
                                <div >
                                    <label className="label block">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered my-2 w-full" required />
                                </div>

                                <div className="form-control ">
                                    <label className="label block">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={showPassword ? "text" : "password"}
                                        name='password'
                                        placeholder="password"
                                        className="input input-bordered my-2 w-full "
                                        required />
                                    <span className='absolute my-5 -mx-7' onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>

                                <div className="form-control mt-4">
                                    <label >
                                        <LoadCanvasTemplate />
                                    </label>

                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" className="input input-bordered mt-4 my-4 w-full" placeholder="write captcha here" required />
                                </div>

                                <button disabled={disabled} type='submit' className="btn w-full mt-4 bg-[#D1A054B2] text-white">Login</button>

                            </form>
                            <Link to="/signUp">
                                <p className='text-center text-[#D1A054] my-4' >New here? Create a New Account</p>
                            </Link>


                            <p className='text-center  my-4' >Or Sign in with</p>

                            <div className='place-content-center flex gap-5 mb-8 '>
                                <button onClick={handleFacebookSignIn} className='btn btn-ghost' ><CiFacebook className=' w-7 h-7' /></button>
                                <button onClick={handleGoogleLogin} className='btn btn-ghost'><FaGoogle className=' w-7 h-7' /></button>
                                <button onClick={handleGithubLogin} className='btn btn-ghost'><FaGithub className=' w-7 h-7' /></button>
                            </div>

                        </div>

                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}
export default Login
