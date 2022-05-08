import { useEffect, useState } from "react";
import axios from 'axios'

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://tranquil-thicket-46733.herokuapp.com/login', { email })
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken)
            }
        }
        getToken();
    }, [user])
    return [token];
}

export default useToken;