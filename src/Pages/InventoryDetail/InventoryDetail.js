import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            <h2>Inventory Details:{inventoryId}</h2>
        </div>
    );
};

export default InventoryDetail;