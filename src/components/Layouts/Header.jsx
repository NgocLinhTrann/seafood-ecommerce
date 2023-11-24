import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import { VscAccount } from 'react-icons/vsc';
import { BsCart3 } from 'react-icons/bs';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
        }
    }

    handleChange = (event) => {
        this.setState(
            {
                inputValue: event.target.value,
            },
            () => {
                console.log(this.state.inputValue)
            }
        )
    }
    handleSearch = () => {
        const { inputValue } = this.state
        window.location.href = `/search?query=${inputValue}`
    }

    handleKeyPress = (event) => {
        // Kiểm tra nếu phím được nhấn là Enter (keyCode 13)
        if (event.key === 'Enter') {
            this.handleSearch()
        }
    }
    render() {
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
                                onChange={this.handleChange}
                                value={this.inputValue}
                                id="searchText"
                                onKeyDown={this.handleKeyPress}
                            />

                            <button
                                className="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300 rounded-r-lg text-white"
                                onClick={this.handleSearch}
                            >
                                Tìm
                            </button>
                        </div>

                        <div className="hidden gap-3 md:flex">
                            <NavLink to="/cart" className="flex cursor-pointer flex-col items-center justify-center">
                                <BsCart3 size={24} className="text-white hover:text-yellow-400" />
                            </NavLink>

                            <NavLink to="/user-account" className="relative flex cursor-pointer flex-col items-center justify-center">
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
                                <NavLink className="font-light text-white duration-100 hover:text-yellow-400" to="/login">
                                    Đăng nhập
                                </NavLink>

                                <span className="text-white">&#124;</span>

                                <NavLink className="font-light text-white duration-100 hover:text-yellow-400" to="/register">
                                    Đăng ký
                                </NavLink>

                                <NavLink className="font-light text-white duration-100 hover:text-yellow-400" to="/admin-page">
                                    Admin
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header
