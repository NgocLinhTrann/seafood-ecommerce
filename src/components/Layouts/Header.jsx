import React, { Component } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { Link, Navigate } from 'react-router-dom';
import { Badge } from '@mui/material';

import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import avatarPicture from './../../assets/dnh_assets/userAvatar.jpg';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            renderSearchPage: false,
        };
    }

    handleChange = (event) => {
        this.setState(
            {
                inputValue: event.target.value,
            },
            () => {
                console.log(this.state.inputValue);
            }
        );
    };
    handleSearch = () => {
        this.setState({ renderSearchPage: true });
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSearch();
        }
    };
    render() {
        console.log('check header props', this.props.userInfo);
        if (this.state.renderSearchPage) {
            return <Navigate to={`/search?query=${this.state.inputValue}`} />;
        }
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

                        <div className="hidden gap-5 md:flex">
                            <Link
                                to="/cart"
                                className="flex cursor-pointer flex-col items-center justify-center"
                            >
                                <Badge badgeContent={999} color="error">
                                    <BsCart3
                                        size={24}
                                        className="text-white hover:text-yellow-400"
                                    />
                                </Badge>
                            </Link>

                            <Link
                                to="/account"
                                className="relative flex cursor-pointer flex-col items-center justify-center"
                            >
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar alt="User Avatar" src={avatarPicture} />
                                </StyledBadge>
                            </Link>
                        </div>
                    </header>
                    <nav className="relative bg-cyan-500">
                        <div className="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
                            <div className="mx-7 flex gap-8">
                                <Link
                                    className="font-light text-white duration-100 hover:text-yellow-400"
                                    to="/"
                                >
                                    Trang chủ
                                </Link>
                                <a className="font-light text-white duration-100 hover:text-yellow-400" href="catalog.html">
                                    Hướng dẫn mua hàng
                                </a>
                                <a className="font-light text-white duration-100 hover:text-yellow-400" href="about-us.html">
                                    Về chúng tôi
                                </a>
                                <a className="font-light text-white duration-100 hover:text-yellow-400" href="contact-us.html">
                                    Hỗ trợ
                                </a>
                            </div>
                            <div className="ml-auto flex gap-4 px-5">
                                <a className="font-light text-white duration-100 hover:text-yellow-400" href="/login">
                                    Đăng nhập
                                </a>

                                <span className="text-white">&#124;</span>

                                <a className="font-light text-white duration-100 hover:text-yellow-400" href="/signup">
                                    Đăng ký
                                </a>

                                <Link className="font-light text-white duration-100 hover:text-yellow-400" href="/admin-page">
                                    Admin
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;
