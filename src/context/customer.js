import { createContext, useState } from 'react';
import axios from 'axios';
import API_DOMAIN from '../config';

const CustomersContext = createContext();
function CustomersProvider({ children }) {
    const [customers, setCustomers] = useState([]);
    const fetchCustomers = async () => {
        const response = await axios.get(`${API_DOMAIN}/api/customers`);
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
