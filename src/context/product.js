import { createContext, useState } from "react";
import axios from "axios";

const ProductsContext = createContext();
function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://daohaisan.azurewebsites.net/api/products');
            setProducts(response.data['data']['products']);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const editProductById = async (id, newProductname, newCategory, newWeight, newPrice, newStock) => {
        const response = await axios.put(`http://localhost:3001/seafood/${id}`, {
            productname: newProductname,
            category: newCategory,
            weight: newWeight,
            price: newPrice,
            stock: newStock
        });
        console.log(response);

        const updateProducts = products.map((product) => {
            if (product.id === id) {
                return { ...product, ...response.data }
            }
            return product;
        });
        setProducts(updateProducts);
    }

    const deleteProductById = async (id) => {
        console.log(id);
        await axios.delete(`https://daohaisan.azurewebsites.net/api/product/${id}`);

        const updateProducts = products.filter((product) => {
            return product.id !== id;
        });

        setProducts(updateProducts);
    }

    const searchProduct = async (searchQuery) => {
        try {
            console.log("searchQuery in searchProduct function: " + searchQuery)
            const encodedQuery = encodeURIComponent(searchQuery);
            const response = await axios.get(`https://daohaisan.azurewebsites.net/api/products/${encodedQuery}`);
            setProducts(response.data.data.data.products);
        } catch (error) {
            console.error("Error searching for products:", error);
        }
    }

    // const createProduct = async (name, category, description, imageUrl, weight,
    //     price, available) => {
    //     var data = JSON.stringify({
    //         "name": name,
    //         "category": category,
    //         "description": description,
    //         "imageUrl": imageUrl,
    //         "weight": weight,
    //         "price": price,
    //         "available": available
    //     });

    //     var config = {
    //         method: 'post',
    //         url: 'https://daohaisan.azurewebsites.net/api/product',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         data: data
    //     };

    //     axios(config)
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    const createProduct = async (formData) => {
        console.log("linh product.js")
        try {
            const response = await axios.post('https://daohaisan.azurewebsites.net/api/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                
            });
            console.log("linh product.js 2 ")
            console.log("response" + response.data);
            // Handle the response as needed (e.g., update state or show a success message)
        } catch (error) {
            console.error('Error creating product:', error);
            console.log("linh product.js 3 ")
            // Handle errors (e.g., show an error message)
        }
    }

    // const createProduct = async (formData) => {
    //     console.log(formData);
    //     try {
    //         const response = await axios.post('https://daohaisan.azurewebsites.net/api/product', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const valueToshare = {
        products,
        deleteProductById,
        editProductById,
        createProduct,
        fetchProducts,
        searchProduct,
    };

    return (
        <ProductsContext.Provider value={valueToshare}>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsProvider };
export default ProductsContext;