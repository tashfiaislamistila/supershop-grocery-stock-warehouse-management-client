import { useEffect, useState } from "react"

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-thicket-46733.herokuapp.com/grocery')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, []);
    return [inventories, setInventories];
}
export default useInventories;