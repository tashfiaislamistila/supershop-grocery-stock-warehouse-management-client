import React from 'react';
import { useParams } from 'react-router-dom';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBListGroup, MDBListGroupItem, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
const InventoryDetail = () => {
    // const [inventories] = useInventories([]);
    const { inventoryId } = useParams();
    return (
        <div>
            <div className='text-center mt-5'>
                <h1>Inventory Details: {inventoryId}</h1>
            </div>
            <div className='d-flex align-item-center justify-content-center mt-5 mb-5 border shadow-lg p-3'>
                <MDBCard style={{ width: '25rem' }}>
                    <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
                    <MDBCardBody>
                        <MDBCardTitle>Name</MDBCardTitle>
                        <MDBCardText>
                            Description
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                        <MDBListGroupItem>Quantity</MDBListGroupItem>
                        <MDBListGroupItem>Price</MDBListGroupItem>
                        <MDBListGroupItem>Supplier Name</MDBListGroupItem>
                    </MDBListGroup>
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
                    <div className='px-4 mt-4 mb-4 d-flex justify-content-between'>
                        <div>
                            <MDBBtn href='#'>Update</MDBBtn>
                        </div>
                        <div>
                            <MDBBtn href='#'>Delete</MDBBtn>
                        </div>
                    </div>

                </MDBCard>
            </div>
        </div>

    );
};

export default InventoryDetail;