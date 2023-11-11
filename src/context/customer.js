import { createContext, useState } from "react";
import axios from "axios";

const CustomersContext = createContext();
function CustomersProvider({children}) {
    const [customers, setCustomers] = useState([]);

    const fetchCustomers = async () => {
        const response = await axios.get('https://daohaisan.azurewebsites.net/api/customers');
        setCustomers(response.data['data']['customers']);
    };

    const valueToshare = {
        customers,
        fetchCustomers
    };

    return (
        <CustomersContext.Provider value={valueToshare}>
            {children}
        </CustomersContext.Provider>
    )
}

export {CustomersProvider};
export default CustomersContext;