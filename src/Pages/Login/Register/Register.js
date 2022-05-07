import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }
    }
    return (
        <div className=' register-form'>
            <div className='container w-50 mx-auto border mt-5 mb-5 shadow-lg rounded'>
                <div className='mt-5'>
                    <h2 style={{ textAlign: 'center' }}>Please Register</h2>
                </div>

                <div className='mt-5 mb-5'>
                    <form className='border shadow-lg rounded mb-3 p-2 mx-3' onSubmit={handleRegister}>
                        <input type="text" name="name" id="" placeholder='Your Name' />
                        <input type="email" name="email" id="" placeholder='Your Email'
                            required />
                        <input type="password" name="password" id="" placeholder='Your Password' required />
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" required />
                        <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor='terms'>Accept Supershop Grocery Stock Terms and Conditions</label>

                        <input disabled={!agree} className='mt-2' type="submit" value="Register" />
                    </form>
                    <p className='px-3'>Already have an account?<Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>

            </div>
        </div >
    );
};

export default Register;