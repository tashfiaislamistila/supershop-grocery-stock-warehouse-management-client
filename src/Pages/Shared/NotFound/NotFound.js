import React from 'react';
import notfound from '../../../image/404.png'
import PageTitle from '../PageTitle/PageTitle';
const NotFound = () => {
    return (
        <div>
            <PageTitle title="404"></PageTitle>
            <div className='mt-4 text-center'>
                <h1>THE PAGE YOU WERE LOOKING FOR DOES NOT EXISTS !!!</h1>
            </div>
            <div className='mt-4 text-center'>
                <img src={notfound} alt=""></img>
            </div>
        </div>
    );
};

export default NotFound;