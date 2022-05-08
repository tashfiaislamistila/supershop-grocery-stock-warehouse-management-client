import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import useInventories from '../CustomHooks/useInventories';


const ManageInventories = () => {
    const [inventories, setInventories] = useInventories([]);
    const handleDelete = id => {
        const proceed = window.confirm("Confirm Delete");
        if (proceed) {
            const url = `http://localhost:5000/grocery/${id}`;
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
            <table className="table">
                <thead>
                    <tr>
                        {/* <th scope="col">id</th> */}
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th className='text-center' scope="col">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventories.map(inventory => <tr>
                            <td><img style={{ width: "70px" }} src={inventory.image} alt="" />
                            </td>
                            <td>{inventory.product}</td>
                            <td>$ {inventory.price}</td>
                            <td>{inventory.quantity}</td>
                            <td>{<MDBBtn>Update</MDBBtn>}</td>
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