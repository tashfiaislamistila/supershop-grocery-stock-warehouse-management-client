import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { id, product, image, supplier, quantity, price, description } = inventory;
    const navigate = useNavigate();
    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <div className="card mt-4 shadow-lg p-3 mb-5 ">
                <div className='text-center'>
                    <img style={{ width: "300px", height: "200px", objectFit: "cover" }} src={image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body ">
                    <div className='bg-warning shadow-lg p-2 mx-3 mb-5 rounded'>
                        <h4 className="card-title">{product}</h4>
                    </div>
                    <p className="card-text mb-2"> <small>{description}</small>
                    </p>
                    <h5 className="card-text mb-2">Price: ${price}</h5>
                    <p className="card-text mb-2">Supplier name: {supplier}</p>
                    <h5 className="card-text">Quantity: {quantity}</h5>
                    <div className='mb-2 p-2'>
                        <MDBBtn rounded onClick={() => navigateToInventoryDetail(id)} className='mx-2' color='secondary'>
                            Manage Stock
                        </MDBBtn>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Inventory;