import React from 'react';

const Footer = () => {

    return (
        <footer className='bg-dark '>
            <div className='text-center text-light'>
                <p><small>Copyright @{new Date().getFullYear()}</small></p>
            </div>
        </footer>
    );
};

export default Footer;