import { createContext, useState } from "react";
import axios from "axios";

const CustomersContext = createContext();
function CustomersProvider({children}) {
    const [customers, setCustomers] = useState([]);

    const fetchCutomers = async () => {
        const response = await axios.get('https://daohaisan.azurewebsites.net/api/products');
        setCustomers(response.data['data']['products']);
    };

    const valueToshare = {
        customers,
        fetchCutomers
    };

    return (
        <CustomersContext.Provider value={valueToshare}>
            {children}
        </CustomersContext.Provider>
    )
}

export {CustomersProvider};
export default CustomersContext;