import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogIn = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
        navigate('/');
    }

    return (
        <div>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='my-3 btn btn-dark'>Google</button>
            </div>
        </div>
    );
};

export default SocialLogIn;