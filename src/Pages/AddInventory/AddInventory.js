import React from 'react';
import { useForm } from "react-hook-form";

const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/grocery`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='border shadow-lg ' >

            <h1 className='mt-5 text-center '>Add Inventory Item</h1>
            <form className='d-flex flex-column w-50 mx-auto mt-5 mb-5' onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2 rounded" placeholder="Product Name" {...register("product", { required: true })} />
                <textarea className="mt-1 mb-2 rounded" placeholder="Product Description" {...register("description")} />
                <textarea className="mt-1 mb-2 rounded" placeholder="Supplier Name" {...register("supplier")} />
                <input className="mt-1 mb-2 rounded" placeholder="Price" type="number" {...register("price")} />
                <input className="mt-1 mb-2 rounded" placeholder="Quantity" type="number" {...register("quantity")} />
                <input className="mt-1 mb-2 rounded" placeholder="Photo URL" type="text" {...register("image")} />
                <input className="mt-1 mb-2 rounded" type="submit" value="Add Inventory" />
            </form>

        </div>
    );
};

export default AddInventory;