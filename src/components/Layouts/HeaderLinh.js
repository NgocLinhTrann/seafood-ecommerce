import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { VscAccount } from 'react-icons/vsc';
import { BsCart3 } from 'react-icons/bs';
import { useAuth } from "../../context/auth";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const HeaderLinh = () => {
    const [auth, setAuth] = useAuth();
    const [inputValue, setInputValue] = useState('');
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const navigate = useNavigate();
    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    }
    const handleSearch = () => {
        window.location.href = `/search?query=${inputValue}`;
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
    const handleOpenLogoutModal = () => {
        setShowLogoutModal(true);
    };
    const handleCloseLogoutModal = () => {
        setShowLogoutModal(false);
    };
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: '',
        });
        localStorage.removeItem('auth');
        toast.success('Bạn đã đăng xuất');
        handleCloseLogoutModal();
        navigate('/login');
    };
    return (
        <div className="bg-cyan-500">
            <div className="bg-cyan-500 max-w-[1200px] mx-auto ">
                <header className="mx-auto flex h-16  items-center justify-between px-5">
                    <Link to="/">
                        <div className="text-white text-3xl font-extrabold place-items-centerr">
                            <span className="text-base">SEAFOOD</span>
                            <br />
                            <div>HARBOR</div>
                        </div>
                    </Link>
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
                            placeholder="Tìm kiếm trong Harbor"
                            onChange={handleChange}
                            value={inputValue}
                            id="searchText"
                            onKeyDown={handleKeyPress}
                        />
                        <button
                            className="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300 rounded-r-lg text-white"
                            onClick={handleSearch}
                        >
                            Tìm
                        </button>
                    </div>
                    <div className="hidden gap-3 md:flex">
                        <NavLink to="/cart" className="flex cursor-pointer flex-col items-center justify-center">
                            <BsCart3 size={24} className="text-white hover:text-yellow-400" />
                        </NavLink>
                        <NavLink to="/account" className="relative flex cursor-pointer flex-col items-center justify-center">
                            <VscAccount size={24} className="text-white hover:text-yellow-400" />
                        </NavLink>
                    </div>
                </header>
                <nav className="relative bg-cyan-500">
                    <div className="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
                        <div className="mx-7 flex gap-8">
                            <NavLink
                                className="font-light text-white duration-100 hover:text-yellow-400"
                                to="/"
                            >
                                Trang chủ
                            </NavLink>
                            <NavLink
                                className="font-light text-white duration-100 hover:text-yellow-400"
                                to="/instruction"
                            >
                                Hướng dẫn mua hàng
                            </NavLink>
                            <NavLink
                                className="font-light text-white duration-100 hover:text-yellow-400"
                                to="/about"
                            >
                                Về chúng tôi
                            </NavLink>
                            <NavLink
                                className="font-light text-white duration-100 hover:text-yellow-400"
                                to="/support">
                                Hỗ trợ
                            </NavLink>
                        </div>
                        <div className="ml-auto flex gap-4 px-5">
                            {
                                !auth.user ? (
                                    <>
                                        <NavLink className="font-light text-white duration-100 hover:text-yellow-400" to="/login">
                                            Đăng nhập
                                        </NavLink>
                                        <span className="text-white">&#124;</span>
                                        <NavLink className="font-light text-white duration-100 hover:text-yellow-400" to="/register">
                                            Đăng ký
                                        </NavLink>
                                    </>
                                ) : (
                                    <>
                                        <NavLink
                                            onClick={handleOpenLogoutModal}
                                            className="font-light text-white duration-100 hover:text-yellow-400"
                                            to="#">
                                            Đăng xuất
                                        </NavLink>
                                        {showLogoutModal && (
                                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                                                <div className="bg-white p-5 rounded-md">
                                                    <p className="mb-3">Bạn có chắc muốn đăng xuất?</p>
                                                    <div className="flex justify-end">
                                                        <button
                                                            onClick={handleCloseLogoutModal}
                                                            className="mr-2 px-4 py-2 bg-gray-400 text-white rounded-md"
                                                        >
                                                            Hủy
                                                        </button>
                                                        <button
                                                            onClick={handleLogout}
                                                            className="px-4 py-2 bg-red-500 text-white rounded-md"
                                                        >
                                                            Đăng xuất
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )
                            }
                            <NavLink className="font-light text-white duration-100 hover:text-yellow-400" to="/admin/dashboard">
                                Admin
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HeaderLinh;
