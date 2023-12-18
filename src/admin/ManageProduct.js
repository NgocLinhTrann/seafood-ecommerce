import React, { useState, useContext, useEffect } from 'react';
import ProductShow from "../components/Product/ProductShow"
import ProductsContext from "../context/product";
import Avatar from "../../src/assets/images/avatar-photo.jpg";
import { useNavigate } from 'react-router-dom';
import useKeyPress from "../hooks/use-key-press";
import Layout from './components/Layout';

function ManageProduct() {
    const navigate = useNavigate("");
    const [searchString, setSearchString] = useState("");

    const handleSearch = async () => {
        if (searchString !== '') {
            const encodedQuery = encodeURIComponent(searchString);
            console.log(encodedQuery)
            navigate(`/admin/manage-product/search?keyword=${encodedQuery}`);
        }
    };

    const { fetchProducts } = useContext(ProductsContext);
    useEffect(() => {
        fetchProducts();
    }, []);

    useKeyPress(handleSearch)

    return (
        <Layout title="Quản lý sản phẩm" activePage="product">
            <div className="flex justify-start">    
                <div className="w-full">
                    <div className="bg-stone-100 py-2">
                        <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
                            <div className="hidden h-9 w-2/5 items-center border md:flex bg-white rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="mx-3 h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>

                                <input
                                    className="hidden w-11/12 outline-none md:block"
                                    type="search"
                                    placeholder="Tìm kiếm..."
                                    value={searchString}
                                    onChange={(e) => setSearchString(e.target.value)}
                                />

                                <button
                                    className="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300 rounded-r-lg text-white"
                                    onClick={handleSearch}
                                >
                                    Tìm
                                </button>
                            </div>

                            <div className="flex items-center">
                                <div className="relative">
                                    <a className="flex items-center" href="#">
                                        <span className="hidden text-right lg:block">
                                            <span className="block text-sm font-medium text-black dark:text-white">Quản trị viên</span>
                                        </span>

                                        <span className="h-12 w-12 rounded-full ml-2">
                                            <img src={Avatar} alt="User" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className="text-2xl ml-12">Danh sách sản phẩm</div>
                    <div className="w-11/12">
                        <ProductShow />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ManageProduct;