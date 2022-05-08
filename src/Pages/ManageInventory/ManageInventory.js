// import React from 'react';
// import { MDBBtn } from 'mdb-react-ui-kit';
// import useInventories from '../CustomHooks/useInventories';

// const ManageInventory = ({ inventory }) => {
//     const { image, product, quantity, price } = inventory;
//     const [inventories, setInventories] = useInventories([]);
//     const handleDelete = id => {
//         const proceed = window.confirm("Confirm Delete");
//         if (proceed) {
//             const url = `http://localhost:5000/grocery/${id}`;
//             fetch(url, {
//                 method: 'DELETE'
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     const remaining = inventories.filter(inventory => inventory._id !== id)
//                     setInventories(remaining);
//                 })
//         }
//     }
//     return (
//         <tr>
//             {/* <td>{_id}</td> */}
//             <td><img style={{ width: "70px" }} src={image} alt="" />
//             </td>
//             <td>{product}</td>
//             <td>$ {price}</td>
//             <td>{quantity}</td>
//             <td>{<MDBBtn>Update</MDBBtn>}</td>
//             <td>{<MDBBtn className="bg-danger" onClick={() => handleDelete(inventory._id)}>Delete</MDBBtn>}</td>


//         </tr>
//     );
// };

// export default ManageInventory;