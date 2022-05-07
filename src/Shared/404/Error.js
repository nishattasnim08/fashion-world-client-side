import React from 'react';
import error from '../../images/error/404-Error.png'

const Error = () => {
    return (
        <div className='text-center my-auto'>
            <img src={error} alt="Page Not Found" />
        </div>
    );
};

export default Error;