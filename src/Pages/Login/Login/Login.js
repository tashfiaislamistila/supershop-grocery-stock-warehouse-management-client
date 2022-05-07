import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const navigateToRegisterPage = event => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div className='w-75 mx-auto border mt-5 mb-5 shadow-lg rounded'>
            <div className='mt-5 text-center mb-5'>
                <h1>Please Login</h1>
            </div>
            <Form className='border shadow-lg rounded mb-3 p-2 mx-3' onSubmit={handleSubmit}>
                <Form.Group className="mb-3  p-2 mx-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3  p-2 mx-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <div className='mb-2 p-2 mx-3'>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
            {errorElement}
            <div className='mb-4 px-4'>
                <p>New to Supershop Grocery Stock?<Link to="/register" className='text-danger pe-auto text-decoration-none ' onClick={navigateToRegisterPage}> Please Register</Link></p>
            </div>
            <div className='mb-4 px-4'>
                <p>Forget Password?<Link to="/register" className='text-primary pe-auto text-decoration-none ' onClick={resetPassword}> Reset Password</Link></p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;