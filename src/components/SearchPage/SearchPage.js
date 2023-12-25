import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingProduct from '../HomePageNLinh/LoadingProduct';
import ProductList from '../HomePageNLinh/ProductList';
import Layout from '../Layouts/Layout';
import { useAuth } from '../../context/auth';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import API_DOMAIN from '../../config';

function SearchPage() {
    const [auth, setAuth] = useAuth();
    const location = useLocation();
    const [queryValue, setQueryValue] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${API_DOMAIN}/api/admin/products/${encodeURIComponent(queryValue)}`,
                    {
                        headers: {
                            Authorization: `Bearer ${auth.token}`,
                        },
                    }
                );
                const data = await response.json();
                if (data.length !== 0) {
                    setFilteredProducts(data.data.data.products);
                } else {
                    setFilteredProducts([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        if (location) {
            const searchParams = new URLSearchParams(location.search);
            const query = searchParams.get('query');
            setQueryValue(query || '');
            fetchData();
        }
    }, [location, queryValue]);
    return (
        <Layout>
            <div className="max-w-[1200px] mx-auto mb-5">
                <div>
                    <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
                        <ul className="flex items-center">
                            <NavLink to="/">
                                <FaHome size={21} />
                            </NavLink>
                            <li>
                                <span className="mx-2 text-gray-500">&gt;</span>
                            </li>
                            <li className="text-gray-500">Tìm kiếm sản phẩm: "{queryValue}"</li>
                        </ul>
                    </nav>
                    <h3 className="my-5 text-2xl font-semibold text-gray-700 text-shadow-md">
                        Kết quả tìm kiếm
                    </h3>
                    {isLoading ? (
                        <LoadingProduct />
                    ) : (
                        <>
                            {filteredProducts.length === 0 ? (
                                <div className="h-screen">
                                    <p className="bg-red-100 p-4 text-gray-500 font-bold text-base">
                                        Không tìm thấy sản phẩm phù hợp.
                                    </p>
                                </div>
                            ) : (
                                <ProductList products={filteredProducts} productsPerPage={4} />
                            )}
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default SearchPage;
