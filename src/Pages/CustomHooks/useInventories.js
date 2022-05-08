import { useEffect, useState } from "react"

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/grocery')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, []);
    return [inventories, setInventories];
}
export default useInventories;