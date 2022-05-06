import React from 'react';
import useInventories from '../CustomHooks/useInventories';

import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [inventories] = useInventories([]);

    return (
        <div>
            <div className='text-center mt-5'>
                <h1>Manage Inventories {inventories.length}</h1>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventories.map(inventory => <ManageInventory
                            key={inventory.id}
                            inventory={inventory}></ManageInventory>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventories;