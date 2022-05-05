import React from 'react';


const Inventory = ({ inventory }) => {

    const { product, image, supplier, quantity, price, description } = inventory;

    return (
        <div>
            <div className="card mt-4 shadow-lg p-3 mb-5 ">
                <div className='text-center'>
                    <img style={{ width: "300px", height: "200px", objectFit: "cover" }} src={image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body ">
                    <div className='bg-warning shadow-lg p-2 mb-5 rounded'>
                        <h4 className="card-title">{product}</h4>
                    </div>
                    <p className="card-text mb-2"> <small>{description}</small>
                    </p>
                    <h5 className="card-text mb-2">Price: ${price}</h5>
                    <p className="card-text mb-2">Supplier name: {supplier}</p>
                    <h5 className="card-text">Quantity: {quantity}</h5>
                    <div className='mb-2 p-2'>
                        <button className='btn btn-outline-primary rounded-box px-3 py-2'>Manage Stock</button>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Inventory;