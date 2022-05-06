import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='bg-dark text-center text-white '>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='google' />
                    </a>
                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='github' />
                    </a>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                Copyright @{new Date().getFullYear()}
                <br />
                <a className='text-white' href='#home'>
                    Supershop Grocery Stock
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;