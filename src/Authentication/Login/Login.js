import React from 'react';
import { Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './LogIn.css'
import { useNavigate } from 'react-router-dom';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const LogIn = () => {

    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogIn = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        console.log(user);
        navigate('/');
    }

    return (
        <div className='container mx-auto my-5'>
            <div className='text-center'>
                <h1>Please Log In</h1>
            </div>
            <div className='w-50 mx-auto my-5'>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Enter your email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Enter your password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required
                        />
                    </Form.Group>
                    <div className='text-center'>
                        <input type="submit" value={'Log In'} className='btn btn-dark' />
                    </div>
                </Form>

                <SocialLogIn />
            </div>
            <div className='text-center'>
                <p>Not have an account? <span className='text-primary'>Create an account</span> </p>
            </div>
        </div>
    );
};

export default LogIn; 