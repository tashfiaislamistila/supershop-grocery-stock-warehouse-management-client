import React from 'react';

const Inventory = ({ inventory }) => {
    const { product, image, supplier, quantity, price, description } = inventory;
    return (
        <div>

            <div className="card ">
                <div className='text-center'>
                    <img style={{ width: "200px", height: "200px", objectFit: "cover" }} src={image} className="card-img-top " alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>

            </div>
            {/* <img src={image} alt=""></img>
            <h2>{product}</h2>
            <p>price: {price}</p>
            <p>Supplier name: {supplier}</p>
            <p>Quantity: {quantity}</p>
            <p><small>
                Description:{description}
            </small></p>
            <button>Manage Stock</button> */}


        </div>
    );
};

export default Inventory;