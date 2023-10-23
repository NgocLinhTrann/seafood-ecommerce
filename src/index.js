import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { NavigationProvider } from './context/navigation';
import { ProductsProvider } from './context/product';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <NavigationProvider>
        <ProductsProvider>
            <App />
        </ProductsProvider>
    </NavigationProvider>
);  