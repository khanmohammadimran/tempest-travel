import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png'



const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if (error) {
        return (
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        navigate('/home')
    }

    if (loading) {
        <p className='text-success'>Loading...</p>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <h4 className='mt-2 px-2'>or</h4>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-100 my-3'>
                    <img src={google} alt="" />
                    <span className='px-2 fw-bold'>Google Sign In</span></button>
            </div>
        </div >
    );
};

export default SocialLogin;