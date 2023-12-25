import { createContext, useState } from 'react';
import axios from 'axios';
import API_DOMAIN from '../config';

const CustomersContext = createContext();
function CustomersProvider({ children }) {
    const [customers, setCustomers] = useState([]);
    const fetchCustomers = async () => {
        var config = {
            method: 'get',
            url: `${API_DOMAIN}/api/admin/customers`,
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('auth')).token}`,
            },
        };
        const response = await axios(config);
        setCustomers(response.data['data']['customers']);
    };
    const valueToshare = {
        customers,
        fetchCustomers,
    };
    return <CustomersContext.Provider value={valueToshare}>{children}</CustomersContext.Provider>;
}

export { CustomersProvider };
export default CustomersContext;
