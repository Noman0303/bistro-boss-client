import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import loginImage from '../../assets/others/authentication2.png'
import bgImage from '../../assets/others/authentication.png'



import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';


const SignUp = () => {

    const { createUser, signInWithGoogle, signInWithGitHub, signInWithFacebook } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log('location in the login page', location)


    const handleRegister = e => {
        e.preventDefault();
        // console.log('form submitted')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photo.value;


        console.log(email, password, name, photoURL)

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                return updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL
                })
            })
            
            
            .then(() => {
                toast.success('Registration successful! Welcome!', { autoClose: 3000 });

            })
            .catch(error => {
                console.error(error);
                toast.error('Registration not successful. Please try again!', { autoClose: 3000 });
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                toast.success('Google login successful! Welcome!', { autoClose: 3000 });
                // navigate after login
                navigate(location?.state ? location.state : '/')
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
                navigate(location?.state ? location.state : '/')
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
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                toast.error('Facebook login failed. Please try again!', { autoClose: 3000 });
            })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div>
                <div className="flex-col my-8 rounded-xl gap-2 hover:shadow-2xl "
                    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                    <div className='grid sm:grid-cols-1 md:grid-cols-2  mx-auto mt-5'>

                        {/* left side */}

                        <div className="pl-2 pr-4 md:pr-18 lg:pr-48 mt-4">
                            <h1 className="text-4xl font-bold mx-auto text-center">Sign Up</h1>

                            <form onSubmit={handleRegister} >

                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" className="input input-bordered my-2 w-full" placeholder='name' required />
                                </div>

                                <div className="form-control">
                                    <label className="label block">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name="photo" className="input input-bordered my-2 w-full" placeholder='photo Url' required />
                                </div>

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

                                <button type='submit' className="btn w-full mt-4 bg-[#D1A054B2] text-white">Sign Up</button>
                            </form>


                            <Link to='/login'>
                                <p className='text-center text-[#D1A054] my-4' >Already registered? Go to log in</p>
                            </Link>


                            <p className='text-center  my-4' >Or Sign up with</p>

                            <div className='place-content-center flex gap-5 mb-8 '>
                                <button onClick={handleFacebookSignIn} className='btn btn-ghost' ><CiFacebook className=' w-7 h-7' /></button>
                                <button onClick={handleGoogleLogin} className='btn btn-ghost'><FaGoogle className=' w-7 h-7' /></button>
                                <button onClick={handleGithubLogin} className='btn btn-ghost'><FaGithub className=' w-7 h-7' /></button>
                            </div>

                        </div>

                        {/* right side  */}

                        <div>
                            <img src={loginImage} alt="" />
                        </div>

                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}
export default SignUp;
