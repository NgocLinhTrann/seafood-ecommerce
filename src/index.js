import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { NavigationProvider } from './context/navigation';
import { ProductsProvider } from './context/product';
import { OrdersProvider } from './context/order';
import { CustomersProvider } from './context/customer';
import { BrowserRouter } from 'react-router-dom';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <BrowserRouter>
        <NavigationProvider>
            <OrdersProvider>
                <ProductsProvider>
                    <CustomersProvider>
                        <App />
                    </CustomersProvider>
                </ProductsProvider>
            </OrdersProvider>
        </NavigationProvider>
    </BrowserRouter>
);  