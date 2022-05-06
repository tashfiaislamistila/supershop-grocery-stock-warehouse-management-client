import React from 'react';
import useInventories from '../CustomHooks/useInventories';

import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [inventories] = useInventories([]);

    return (
        <div>
            <h1>Manage Inventories {inventories.length}</h1>
            <table class="table">
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