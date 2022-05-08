import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

const ManageInventory = ({ inventory }) => {
    const { image, product, quantity, price } = inventory;

    const handleDelete = id => {
        const proceed = window.confirm("Confirm Delete");
        if (proceed) {

        }
    }
    return (
        <tr>
            {/* <td>{_id}</td> */}
            <td><img style={{ width: "70px" }} src={image} alt="" />
            </td>
            <td>{product}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td>{<MDBBtn>Update</MDBBtn>}</td>
            <td>{<MDBBtn className="bg-danger" onClick={() => handleDelete(inventory._id)}>Delete</MDBBtn>}</td>


        </tr>
    );
};

export default ManageInventory;