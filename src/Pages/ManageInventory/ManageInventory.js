import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
const ManageInventory = ({ inventory }) => {
    const { id, product, quantity, price } = inventory;
    return (
        <tr>
            <td>{id}</td>
            <td>{product}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td>{<MDBBtn>Delete</MDBBtn>}</td>
        </tr>
    );
};

export default ManageInventory;