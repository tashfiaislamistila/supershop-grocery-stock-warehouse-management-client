import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
const ManageInventory = ({ inventory }) => {
    const { id, image, product, quantity, price } = inventory;
    return (
        <tr>
            {/* <td>{id}</td> */}

            <td><img style={{ width: "70px" }} src={image} alt="" />
            </td>
            <td>{product}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td>{<MDBBtn>Update</MDBBtn>}</td>
            <td>{<MDBBtn className="bg-danger">Delete</MDBBtn>}</td>


        </tr>
    );
};

export default ManageInventory;