import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../CustomHooks/useToken';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = useToken(user || user1);
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message}  {error1?.message}</p>
    }

    if (token) {
        // navigate('/home');
        navigate(from, { replace: true });
    }

    return (
        <div className='container mb-3 p-2 mx-3'>
            <div className='d-flex align-items-center '>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <i className="fs-5 fab fa-google"></i>
                </button>
                <button onClick={() => signInWithGithub()}
                    className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <i className="fs-5  fab fa-github"></i>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;