import React from 'react';

const Inventory = ({ inventory }) => {
    const { product, image, supplier, quantity, price, description } = inventory;
    return (
        <div>
            <img src={image} alt=""></img>
            <h2>{product}</h2>
            <p>price: {price}</p>
            <p>Supplier name: {supplier}</p>
            <p>Quantity: {quantity}</p>
            <p><small>
                Description:{description}
            </small></p>

        </div>
    );
};

export default Inventory;