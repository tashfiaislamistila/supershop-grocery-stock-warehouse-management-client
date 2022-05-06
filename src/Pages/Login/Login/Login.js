import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    const navigateToRegisterPage = event => {
        navigate('/register');
    }
    return (
        <div className='container w-50 mx-auto border mt-5 mb-5 shadow-lg rounded'>
            <div className='mt-5 text-center mb-5'>
                <h1>Please Login</h1>
            </div>
            <Form onSubmit={handleSubmit}>
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
                <Form.Group className="mb-3  p-2 mx-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className='mb-5  p-2 mx-3'>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
            <div className='mb-4 px-4 py-2 '>
                <p>New to Supershop Grocery Stock?<Link to="/register" className='text-danger pe-auto text-decoration-none ' onClick={navigateToRegisterPage}> Please Register</Link></p>
            </div>
        </div>
    );
};

export default Login;