import React from 'react';
import { Form } from 'react-bootstrap';
import './Register.css'

const Register = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='text-center'>
                <h1>Please Register</h1>
            </div>
            <div className='w-50 mx-auto my-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Enter your email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Enter your password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                </Form>
            </div>
            <div className='text-center mb-4'>
                <button className='btn btn-dark'>Create Account</button>
            </div>
            <div className='text-center'>
                <p>Already have an account? <span className='text-primary'>Log in</span> </p>
            </div>
        </div>
    );
};

export default Register;