import { RxDashboard } from "react-icons/rx";
import { GoTasklist, GoPeople, GoPackage, GoSignOut } from "react-icons/go";
import ProductShow from "../../components/Product/ProductShow"
import ProductsContext from "../../context/product";
import React, { useState, useContext, useEffect } from 'react';
import Avatar from "../../assets/images/avatar-photo.jpg"

import { useSearchParams, useNavigate } from 'react-router-dom';

function ADManageProductSearch() {
    const navigate = useNavigate ("");
    const {searchProduct} = useContext(ProductsContext);

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('keyword') || '';
    const [searchString, setSearchString] = useState(searchQuery);

    useEffect(() => {
        searchProduct(searchString);
    }, [searchString]);

    const handleSearch = async () => {
        // event.preventDefault();
        const encodedQuery = encodeURIComponent(searchString);
        console.log("searchString: " + searchString)
        console.log("encodedQuery: " + encodedQuery)
        navigate(`/ad-manage-product/search?keyword=${encodedQuery}`);
        searchProduct(searchString);
    };

    // useEffect(() => {
    //     console.log("searchQuery in useEffect: " + searchQuery);
    //     searchProduct(searchString);
    // }, [searchQuery]);

    return (
        <div className="flex justify-start">
            <div className="text-white bg-cyan-500 w-2/12 absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
                {/* <!-- SIDEBAR HEADER --> */}
                <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                    <a href="/admin-page">
                        {/* <img src="./images/logo/logo.svg" alt="Logo" /> */}
                        <div className='text-white text-3xl font-extrabold place-items-centerr'>
                            <span className='text-base'>SEAFOOD</span>
                            <br />
                            <div>HARBOR</div>
                        </div>
                    </a>

                    <button
                        className="block lg:hidden"
                    >
                        <svg
                            className="fill-current"
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                                fill=""
                            />
                        </svg>
                    </button>
                </div>
                {/* <!-- SIDEBAR HEADER --> */}

                <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                    {/* <!-- Sidebar Menu --> */}

                    <nav
                        className="mt-5 py-4 px-4 lg:mt-9 lg:px-6"
                        x-data="{selected: $persist('Dashboard')}"
                    >
                        {/* <!-- Menu Group --> */}
                        <div>
                            {/* <h3 className="mb-4 ml-4 text-sm font-medium ">MENU</h3> */}
                            <ul className="mb-6 flex flex-col gap-1.5">
                                {/* <!-- Menu Item Dashboard --> */}
                                <li>
                                    <a
                                        className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                        href="/admin-page"
                                    >
                                        <RxDashboard size={21} />
                                        Thống kê/Báo cáo
                                    </a>
                                </li>

                                {/* <!-- Menu Item Forms --> */}
                                <li>
                                    <a
                                        className="bg-teal-600 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                        href="ad-manage-product"
                                    >
                                        <GoTasklist size={23} />
                                        Sản phẩm
                                    </a>

                                    {/* <!-- Dropdown Menu Start --> */}
                                    <div className="overflow-hidden">
                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-5 ml-1">
                                            <li>
                                                <a
                                                    className="bg-teal-400 group relative flex items-center gap-2.5 rounded-md px-4 font-light duration-300 ease-in-out"
                                                    href="/ad-manage-product"
                                                >Danh sách sản phẩm</a>
                                            </li>
                                            <li>
                                                <a
                                                    className="group relative flex items-center gap-2.5 rounded-md px-4 font-light duration-300 ease-in-out"
                                                    href="/ad-add-product"
                                                >Thêm sản phẩm</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Dropdown Menu End --> */}
                                </li>
                                {/* <!-- Menu Item Forms --> */}

                                {/* <!-- Menu Item Tables --> */}
                                <li li >
                                    <a
                                        className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                        href="/ad-manage-order"
                                    >
                                        <GoPackage size={21} />
                                        Đơn hàng
                                    </a>
                                </li >
                                {/* <!-- Menu Item Tables --> */}

                                {/* <!-- Menu Item Settings --> */}
                                <li>
                                    <a
                                        className=" group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                        href="/ad-manage-customer"
                                    >
                                        <GoPeople size={19} />
                                        Khách hàng
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                        href="settings.html"
                                    >
                                        <GoSignOut size={20} />
                                        Đăng xuất
                                    </a>
                                </li>
                                {/* <!-- Menu Item Settings --> */}
                            </ul >
                        </div >
                    </nav >
                </div >
            </div >
            <div className="w-full">
                <div className="bg-stone-100 py-2">
                    <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
                        <form className="hidden h-9 w-2/5 items-center border md:flex bg-white rounded-lg">
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
                        </form>

                        <div class="flex items-center">
                            <div class="relative">
                                <a class="flex items-center" href="#">
                                    <span class="hidden text-right lg:block">
                                        <span class="block text-sm font-medium text-black dark:text-white">Quản trị viên</span>
                                    </span>

                                    <span class="h-12 w-12 rounded-full ml-2">
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
    )
}

export default ADManageProductSearch;