import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useInventories from '../CustomHooks/useInventories';
import axios from 'axios'
import { MDBBtn } from 'mdb-react-ui-kit';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [inventories, setInventories] = useInventories();


    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = (`https://tranquil-thicket-46733.herokuapp.com/grocery1?email=${email}`);
            const { data } = await axios.get(url);

            setInventories(data);
        }
        getOrders();
    })

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
        <div className='w-50 mx-auto my-2'>
            <h2 className='my-2'>Your Item: {inventories.length}</h2>
            {
                inventories.map(inventory => <div className='my-2' key={inventory._id}>
                    <div className="card mt-4 shadow-lg p-3 mb-5 ">
                        <div className='text-center'>
                            <img style={{ width: "300px", height: "200px", objectFit: "cover" }} src={inventory.image} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body ">
                            <div className='bg-warning shadow-lg p-2 mx-3 mb-5 rounded'>
                                <h4 className="card-title">{inventory.product}</h4>
                            </div>
                            <p className="card-text mb-2"> <small>{inventory.description}</small>
                            </p>
                            <h5 className="card-text mb-2">Price: ${inventory.price}</h5>
                            <p className="card-text mb-2">Supplier name: {inventory.supplier}</p>
                            <h5 className="card-text">Quantity: {inventory.quantity}</h5>
                            <h5 className="card-text">Sold: {inventory.sold}</h5>
                            <MDBBtn className="bg-danger" onClick={() => handleDelete(inventory._id)}>Delete</MDBBtn>

                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyItem;