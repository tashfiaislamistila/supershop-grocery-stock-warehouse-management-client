import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import useInventories from '../CustomHooks/useInventories';


const ManageInventories = () => {
    const [inventories, setInventories] = useInventories([]);
    const handleDelete = id => {
        const proceed = window.confirm("Confirm Delete");
        if (proceed) {
            const url = `https://tranquil-thicket-46733.herokuapp.com/grocery/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id)
                    setInventories(remaining);
                })
        }
    }
    return (
        <div>
            <div className='text-center mt-5'>
                <h1>Manage Inventories {inventories.length}</h1>
            </div>
            <table style={{ overflow: "scroll" }} className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventories.map(inventory => <tr key={inventory._id}>
                            <td><img style={{ width: "70px" }} src={inventory.image} alt="" />
                            </td>
                            <td>{inventory.product}</td>
                            <td>$ {inventory.price}</td>
                            <td>{inventory.quantity}</td>
                            <td>{inventory.sold}</td>
                            {/* <td>{<MDBBtn>Update</MDBBtn>}</td> */}
                            <td>{<MDBBtn className="bg-danger" onClick={() => handleDelete(inventory._id)}>Delete</MDBBtn>}</td>

                        </tr>)

                    }
                    {/* {
                        inventories.map(inventory => <ManageInventory
                            key={inventory.id}
                            inventory={inventory
                            }></ManageInventory>)
                    } */}
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventories;