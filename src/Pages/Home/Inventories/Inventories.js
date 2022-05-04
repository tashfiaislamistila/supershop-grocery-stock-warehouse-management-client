import React, { useEffect, useState } from 'react';
import Inventory from '../../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return (
        <div >
            <h1 className='mt-4 text-center'>Warehouse Inventories</h1>
            <div className='row row-cols-1  row-cols-md-2 row-cols-lg-3 g-4 text-center'>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}>
                    </Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;