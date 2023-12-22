import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ConsBages from '../ConsBages';
import Category from './Category';
import Slider from './Slider';
import LoadingProduct from './LoadingProduct';
import { useAuth } from '../../context/auth';
import Layout from '../Layouts/Layout';

const HomePageNLinh = () => {
    const [auth, setAuth] = useAuth();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('Tất cả');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filterProducts = () => {
        if (selectedCategory === 'Tất cả') {
            setFilteredProducts(products);
        } else {
            const filteredProducts = products.filter(
                (product) => product.category === selectedCategory
            );
            setFilteredProducts(filteredProducts);
        }
    };

    const fetchProduct = () => {
        fetch('https://seafoodharbor.azurewebsites.net/api/products')
            .then((response) => response.json())
            .then((data) => {
                const { products } = data.data;
                setProducts(products);
                setIsLoading(false);
                filterProducts();
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [selectedCategory, products]);

    return (
        <Layout>
            {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
            <div className="max-w-[1200px] mx-auto">
                <div className="flex mt-2">
                    <div className="w-1/6 border-r border-gray-300 pr-4 h-1">
                        <Category
                            selectedCategory={selectedCategory}
                            onCategoryChange={handleCategoryChange}
                        />
                    </div>
                    <div className="relative w-5/6 overflow-hidden h-[23rem]">
                        <div className="flex flex-col h-full">
                            <Slider className="h-full" />
                        </div>
                    </div>
                </div>
                <h3 className="my-5 text-2xl font-semibold text-gray-700 text-shadow-md">
                    {selectedCategory}
                </h3>
                {isLoading ? (
                    <LoadingProduct />
                ) : (
                    <>
                        {filteredProducts.length === 0 ? (
                            <div className="bg-red-100 p-4 text-gray-500 font-bold text-base">
                                Danh mục này chưa có sản phẩm.
                            </div>
                        ) : (
                            <ProductList
                                products={filteredProducts}
                                productsPerPage={8}
                            />
                        )}
                    </>
                )}
                <ConsBages />
            </div>
        </Layout>
    );
};

export default HomePageNLinh;
