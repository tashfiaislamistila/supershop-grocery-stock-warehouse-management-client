import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBListGroup, MDBListGroupItem, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import useInventories from '../CustomHooks/useInventories';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventories, setInventories] = useInventories([]);

    useEffect(() => {
        const url = `http://localhost:5000/grocery/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data));

    }, [])

    return (
        <div>
            <div className='text-center mt-5'>
                <h1>Inventory Details: {inventories.product}</h1>
            </div>
            <div className='d-flex align-item-center justify-content-center mt-5 mb-5 border shadow-lg p-3'>
                <MDBCard style={{ width: '25rem' }}>
                    <MDBCardImage position='top' alt='...' src={inventories.image} />
                    <MDBCardBody>
                        <MDBCardTitle>Name : {inventories.product}</MDBCardTitle>
                        <MDBCardText>
                            Description : {inventories.description}
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                        <MDBListGroupItem>Quantity : {inventories.quantity}</MDBListGroupItem>
                        <MDBListGroupItem>Price : ${inventories.price}</MDBListGroupItem>
                        <MDBListGroupItem>Supplier Name : ${inventories.supplier}</MDBListGroupItem>
                    </MDBListGroup>
                    <div className='px-4 mt-4' >
                        <MDBBtn className='bg-danger' href='#'>Daliver</MDBBtn>
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