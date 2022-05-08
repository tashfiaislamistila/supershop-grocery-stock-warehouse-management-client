import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBListGroup, MDBListGroupItem, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import useInventories from '../CustomHooks/useInventories';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    const { quantity } = inventory;

    const handleDelivered = id => {
        let newQuantity = parseInt(quantity) - 1;
        const newInventory = { ...inventory, quantity: newQuantity }
        setInventory(newInventory);
        const url = `http://localhost:5000/grocery/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newInventory)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    useEffect(() => {
        const url = `http://localhost:5000/grocery/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [inventoryId])

    return (
        <div>
            <div className='text-center mt-5'>
                <h1>Inventory Details: {inventory.product}</h1>
            </div>
            <div className='d-flex align-item-center justify-content-center mt-5 mb-5 border shadow-lg p-3'>
                <MDBCard style={{ width: '25rem' }}>
                    <MDBCardImage position='top' alt='...' src={inventory.image} />
                    <MDBCardBody>
                        <MDBCardTitle>Name : {inventory.product}</MDBCardTitle>
                        <MDBCardText>
                            Description : {inventory.description}
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                        <MDBListGroupItem>Quantity : {inventory.quantity}</MDBListGroupItem>
                        <MDBListGroupItem>Price : ${inventory.price}</MDBListGroupItem>
                        <MDBListGroupItem>Supplier Name : ${inventory.supplier}</MDBListGroupItem>
                    </MDBListGroup>
                    <div className='px-4 mt-4' >
                        <MDBBtn onClick={() => handleDelivered(inventory._id)} className='bg-danger' href='#'>Daliver</MDBBtn>
                    </div>
                    <MDBCardBody>
                        <div>
                            <div className='px-2'>
                                <h2>Quantity Update Option</h2>
                            </div>
                            <div style={{ width: '20rem' }}>
                                <MDBInput label='Update Quantity' id='formTextExample1' type='text' aria-describedby='textExample1' />
                                <div id='textExample1' className='form-text'>
                                    Please set the quantity and click the update button.
                                </div>
                            </div>
                        </div>
                    </MDBCardBody>
                    <div className='px-4  mb-4'>
                        <div>
                            <MDBBtn href='#'>Update Quantity</MDBBtn>
                        </div>

                    </div>

                </MDBCard>
            </div>
        </div>

    );
};

export default InventoryDetail;