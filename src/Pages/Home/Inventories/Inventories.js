import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../CustomHooks/useInventories';
import Inventory from '../../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [inventories] = useInventories([]);

    return (
        <div >
            <div className='row row-cols-1  row-cols-md-2 row-cols-lg-3 g-4 text-center'>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}>
                    </Inventory>)
                }
            </div>

        </div >
    );
};

export default Inventories;