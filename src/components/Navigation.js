import '../main.css'
import { VscAccount } from 'react-icons/vsc'
import { BsCart3 } from 'react-icons/bs'

function Navigation() {
    return (
        <div className="bg-cyan-500">
            <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
                <a href="/">
                    <div className="text-white text-3xl font-extrabold place-items-centerr">
                        <span className="text-base">SEAFOOD</span>
                        <br />
                        <div>HARBOR</div>
                    </div>
                </a>
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

                    <input className="hidden w-11/12 outline-none md:block" type="search" placeholder="Tìm kiếm trong Harbor" />

                    <button className="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300 rounded-r-lg text-white">Tìm</button>
                </div>
                <div className="hidden gap-3 md:!flex">
                    <a href="/cart" className="flex cursor-pointer flex-col items-center justify-center">
                        <BsCart3 size={24} className="text-white hover:text-yellow-400" />
                        {/* <p className="text-xs  text-white">Cart</p> */}
                    </a>

                    <a href="/user-account" className="relative flex cursor-pointer flex-col items-center justify-center">
                        <VscAccount size={24} className="text-white hover:text-yellow-400" />
                        {/* <p className="text-xs  text-white">Account</p> */}
                    </a>
                </div>
            </header>
            <nav className="relative bg-cyan-500">
                <div className="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
                    <div className="mx-7 flex gap-8">
                        <a className="font-light text-white duration-100 hover:text-yellow-400" href="/">
                            Trang chủ
                        </a>
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

                        <a className="font-light text-white duration-100 hover:text-yellow-400" href="/admin-page">
                            Admin
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
