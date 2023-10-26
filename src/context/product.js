import { createContext, useState } from "react";
import axios from "axios";

const ProductsContext = createContext();
function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        // const response = await axios.get('https://daohaisan.azurewebsites.net/api/products');
        // setProducts(response.data['data']['products']);
        try {
            const response = await axios.get('https://daohaisan.azurewebsites.net/api/products');
            setProducts(response.data['data']['products']);
        } catch (error) {
            // Handle the error
            console.error('Error fetching products:', error);
            // You can also set an error state or show an error message to the user
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
        // await axios.delete(`http://localhost:3001/seafood/${id}`);
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
            // const decodeSearchTerm = decodeURIComponent(searchQuery)
            // console.log(decodeSearchTerm)
            const response = await axios.get(`https://daohaisan.azurewebsites.net/api/products/${encodedQuery}`);
            setProducts(response.data.data.data.products);
            // Update products state or handle the response data as needed
        } catch (error) {
            console.error("Error searching for products:", error);
        }
    }

    const createProduct = async (name, category, description, imageUrl, weight,
        price, available) => {
        var data = JSON.stringify({
            "name": name,
            "category": category,
            "description": description,
            "imageUrl": imageUrl,
            "weight": weight,
            "price": price,
            "available": available
        });

        var config = {
            method: 'post',
            url: 'https://daohaisan.azurewebsites.net/api/product',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const viewProductDetail = async (productId) => {
        try {
            const response = await axios.get(`https://daohaisan.azurewebsites.net/api/product/${productId}`);
            // Extract product information from the API response
            const productInfo = response.data.data.productInfo;

            // You can use productInfo in your application logic or render it on the screen as needed
            console.log(productInfo);

            // Handle displaying product details on the screen, e.g., set state, update context, etc.
        } catch (error) {
            console.error('Error fetching product details:', error);
            // Handle the error, set an error state, or show an error message to the user
        }
    };

    const valueToshare = {
        products,
        deleteProductById,
        editProductById,
        createProduct,
        fetchProducts,
        searchProduct,
        viewProductDetail,
    };

    return (
        <ProductsContext.Provider value={valueToshare}>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsProvider };
export default ProductsContext;