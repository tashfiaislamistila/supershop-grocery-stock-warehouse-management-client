import useInventories from '../../CustomHooks/useInventories';
import Inventory from '../../Inventory/Inventory';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Inventories.css';

const Inventories = () => {
    const [inventories] = useInventories([]);
    return (
        <div>
            <PageTitle title="All Inventories"></PageTitle>
            <div>
                <h1 className='mt-5 text-center '>All Inventories Item</h1>
            </div>
            <div className='row row-cols-1  row-cols-md-2 row-cols-lg-3 g-4 text-center '>
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