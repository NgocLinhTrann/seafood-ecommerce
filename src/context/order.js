import { createContext, useState } from "react";
import axios from "axios";

const OrdersContext = createContext();
function OrdersProvider({children}) {
    const [orders, setOrders] = useState([]);
    
    const fetchOrders = async () => {
        try {
            const response = await axios.get('https://daohaisan.azurewebsites.net/api/orders');
            setOrders(response.data['data']['orders']);
        } catch (error) {
            console.error('Error fetching orders: ', error);
        }
    };

    const valueToshare = {
        orders,
        fetchOrders
    }

    return (
        <OrdersContext.Provider value={valueToshare}>
            {children}
        </OrdersContext.Provider>
    )
}

export {OrdersProvider};
export default OrdersContext;