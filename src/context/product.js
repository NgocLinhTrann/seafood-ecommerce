import { createContext, useState } from 'react';
import axios from 'axios';
import API_DOMAIN from '../config';

const ProductsContext = createContext();
function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_DOMAIN}/api/products`);
            setProducts(response.data['data']['products']);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const editProductById = async (
        id,
        newProductname,
        newCategory,
        newWeight,
        newPrice,
        newStock
    ) => {
        const response = await axios.put(`${API_DOMAIN}/seafood/${id}`, {
            productname: newProductname,
            category: newCategory,
            weight: newWeight,
            price: newPrice,
            stock: newStock,
        });
        console.log(response);

        const updateProducts = products.map((product) => {
            if (product.id === id) {
                return { ...product, ...response.data };
            }
            return product;
        });
        setProducts(updateProducts);
    };

    const deleteProductById = async (id) => {
        console.log(id);
        var config = {
            method: 'delete',
            url: `${API_DOMAIN}/api/admin/product/${id}`,
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('auth')).token}`,
            },
        };
        // await axios.delete(`${API_DOMAIN}/api/admin/product/${id}`);
        await axios(config);

        const updateProducts = products.filter((product) => {
            return product.id !== id;
        });

        setProducts(updateProducts);
    };

    const searchProduct = async (searchQuery) => {
        try {
            console.log('searchQuery in searchProduct function: ' + searchQuery);
            const encodedQuery = encodeURIComponent(searchQuery);
            const response = await axios.get(`${API_DOMAIN}/api/products/${encodedQuery}`);
            setProducts(response.data.data.data.products);
        } catch (error) {
            console.error('Error searching for products:', error);
        }
    };

    const createProduct = async (formData) => {
        console.log('linh product.js');
        try {
            const response = await axios.post(`${API_DOMAIN}/api/product`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('linh product.js 2 ');
            console.log('response' + response.data);
            // Handle the response as needed (e.g., update state or show a success message)
        } catch (error) {
            console.error('Error creating product:', error);
            console.log('linh product.js 3 ');
            // Handle errors (e.g., show an error message)
        }
    };
    const valueToshare = {
        products,
        deleteProductById,
        editProductById,
        createProduct,
        fetchProducts,
        searchProduct,
    };
    return <ProductsContext.Provider value={valueToshare}>{children}</ProductsContext.Provider>;
}

export { ProductsProvider };
export default ProductsContext;
