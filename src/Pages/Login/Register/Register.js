import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div className='container w-50 mx-auto border mt-5 mb-5 shadow-lg rounded'>
            <div className='mt-5 text-center mb-5'>
                <h2>Register</h2>
            </div>
            <Form >
                <Form.Group className="mb-3  p-2 mx-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3  p-2 mx-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3  p-2 mx-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3  p-2 mx-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Form >
            <div className='mb-5  p-2 mx-3'>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </div>

        </div >
    );
};

export default Register;