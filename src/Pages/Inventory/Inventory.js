import React from 'react';

const Inventory = ({ inventory }) => {
    const { product, image, supplier, quantity, price, description } = inventory;
    return (
        <div>

            <div className="card mt-4">
                <div className='text-center'>
                    <img style={{ width: "415px", height: "200px", objectFit: "cover" }} src={image} className="card-img-top " alt="..." />
                </div>
                <div className="card-body ">
                    <h5 className="card-title">{product}</h5>
                    <p className="card-text mb-2"> <small>{description}</small>
                    </p>
                    <h5 className="card-text mb-2">Price: ${price}</h5>
                    <p className="card-text mb-2">Supplier name: {supplier}</p>
                    <h5 className="card-text">Quantity: {quantity}</h5>
                    <div className='mb-2'>
                        <button>Manage Stock</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Inventory;