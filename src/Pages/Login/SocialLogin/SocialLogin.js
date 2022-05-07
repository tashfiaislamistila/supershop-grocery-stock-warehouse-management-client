import React from 'react';

const SocialLogin = () => {
    return (
        <div className='container mb-3 p-2 mx-3'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <i className="fs-5 fab fa-google"></i>
                </button>
                <button className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <i className="fs-5  fab fa-github"></i>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;