import ProductCreate from "../components/Product/ProductCreate";
import ProductsContext from "../context/product";
import { useEffect, useContext } from "react";
import Layout from "./components/Layout";

function AddProduct() {
    const { fetchProducts } = useContext(ProductsContext);

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Layout activePage="product add">
            <div className="flex justify-start">
                <ProductCreate />
            </div>
        </Layout>
    )
}

export default AddProduct;