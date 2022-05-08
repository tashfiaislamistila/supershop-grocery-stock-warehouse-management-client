import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBListGroup, MDBListGroupItem, MDBBtn } from 'mdb-react-ui-kit';
import { useForm } from "react-hook-form";

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    const { quantity, _id, sold } = inventory;
    const { register, handleSubmit } = useForm();


    useEffect(() => {
        const url = `https://tranquil-thicket-46733.herokuapp.com/grocery/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [inventoryId])

    const handleDelivered = id => {
        if (inventory.quantity > 0) {
            let newQuantity = parseInt(quantity) - 1;
            let newSold = parseInt(sold) + 1;
            const newInventory = { ...inventory, sold: newSold, quantity: newQuantity }
            setInventory(newInventory);
            const url = `https://tranquil-thicket-46733.herokuapp.com/grocery/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newInventory)
            })
                .then(res => res.json())
                .then(data => console.log(data));
            alert("Item delivered")
        }
    }
    const onSubmit = data => {
        const { updateQuantity } = data;
        const newQuantity = parseInt(quantity) + parseInt(updateQuantity)
        console.log(newQuantity);
        const newInventory = { ...inventory, quantity: newQuantity }
        setInventory(newInventory);
        const url = `https://tranquil-thicket-46733.herokuapp.com/grocery/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newInventory)
        })
            .then(res => res.json())
            .then(data => console.log(data));
        alert("Quantity updated")
    }

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
                        {
                            inventory.quantity < 1 ? <MDBListGroupItem>Sold Out</MDBListGroupItem> : <MDBListGroupItem>Sold : {inventory.sold}</MDBListGroupItem>
                        }

                        <MDBListGroupItem>Price : ${inventory.price}</MDBListGroupItem>
                        <MDBListGroupItem>Supplier Name : ${inventory.supplier}</MDBListGroupItem>
                    </MDBListGroup>
                    <div className='px-4 mt-4 text-center' >
                        <MDBBtn onClick={() => handleDelivered(inventory._id)} className='bg-danger' href='#'>Deliver</MDBBtn>
                    </div>
                    <MDBCardBody>
                        <div>
                            <div className='px-2'>
                                <h2>Quantity Update Option</h2>
                            </div>
                            <form className='d-flex flex-column w-50 mx-auto mt-5 mb-5 ' onSubmit={handleSubmit(onSubmit)}>
                                <input className="mt-1 mb-2 rounded" placeholder="Update Quantity" type="number" {...register("updateQuantity")} />
                                <div id='textExample1' className='form-text'>
                                    Please set the quantity and click the update button.
                                </div>
                                <input className="mt-3 btn btn-primary mb-2 rounded " type="submit" value="Update Quantity" />
                            </form>
                        </div>
                    </MDBCardBody>

                </MDBCard>
            </div>
        </div>

    );
};

export default InventoryDetail;