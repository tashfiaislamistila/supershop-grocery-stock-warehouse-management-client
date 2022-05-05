import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../CustomHooks/useInventories';
import Inventory from '../../Inventory/Inventory';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';


const Home = () => {
    const [inventories] = useInventories([]);
    const navigate = useNavigate();
    const showAllInventories = () => {
        navigate('/inventories');
    }
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <div>
                <div>
                    <h1 className='mt-4 text-center '>Warehouse Inventories</h1>
                </div>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 text-center'>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory.id}
                            inventory={inventory}>
                        </Inventory>)
                    }
                </div>
                <div className='text-center mt-4'>
                    <button className='bg-warning py-2 px-4 rounded-pill' onClick={showAllInventories}>See all Inventory Item</button>
                </div >
            </div>

        </>
    );
};

export default Home;