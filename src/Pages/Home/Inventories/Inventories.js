import React, { useEffect, useState } from 'react';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return (
        <div>
            <h2>Inventories:{inventories.length}</h2>
        </div>
    );
};

export default Inventories;