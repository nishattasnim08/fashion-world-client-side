import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='text-center'>
                <h1>Please Log In</h1>
            </div>
            <div className='w-50 mx-auto my-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Enter your email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Enter your password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </div>
            <div className='text-center mb-4'>
                <button className='btn btn-dark'>Log In</button>
            </div>
            <div className='text-center'>
                <p>Not have an account? <span className='text-primary'>Create an account</span> </p>
            </div>
        </div>
    );
};

export default Login;