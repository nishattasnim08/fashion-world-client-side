import React from 'react';
import { Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    if (user){
        console.log(user);
        navigate('/');
    }

    return (
        <div className='container mx-auto my-5'>
            <div className='text-center'>
                <h1>Please Register</h1>
            </div>
            <div className='w-50 mx-auto my-5'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Enter your email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Enter your password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <div className='text-center'>
                        <input type="submit" value={'Create Account'} className='btn btn-dark' />
                    </div>
                </Form>
            </div>
            <div className='text-center mb-4'>
            </div>
            <div className='text-center'>
                <p>Already have an account? <span className='text-primary'>Log in</span> </p>
            </div>
        </div>
    );
};

export default Register;