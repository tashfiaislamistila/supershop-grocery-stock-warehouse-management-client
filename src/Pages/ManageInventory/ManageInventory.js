import React from 'react';

const ManageInventory = ({ inventory }) => {
    const { id, product, quantity, description } = inventory;
    return (
        <tr>
            <td>{id}</td>
            <td>{product}</td>
            <td>{description}</td>
            <td>{quantity}</td>
        </tr>
    );
};

export default ManageInventory;