import React from 'react';

const Inventory = ({ inventory }) => {
    const { product, image, supplier, quantity, price, description } = inventory;
    return (
        <div>
            <image src={image} alt="" />
            <h2>{product}</h2>
        </div>
    );
};

export default Inventory;