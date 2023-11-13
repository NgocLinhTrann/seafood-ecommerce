import React, { Component } from 'react'
import Logo from '../../assets/images/logo_seafood.png'
import { BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoInstagramAlt } from 'react-icons/bi'

class Footer extends Component {
    render() {
        return (
            <div className="bg-cyan-500 max-w-[1200px] mx-auto ">
                <footer className="mx-auto w-full justify-between pb-10 flex flex-col lg:flex-row">
                    <div className="ml-5">
                        <img className="mt-10 mb-5 w-36" src={Logo} alt="company logo" />
                        <p className="pl-0 text-white">
                            Uy tín tạo nên thương hiệu.
                            <br />
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="mx-5 mt-10">
                            <p className="font-medium text-white">CHĂM SÓC KHÁCH HÀNG</p>
                            <ul className="text-sm leading-8">
                                <li>
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Các câu hỏi thường gặp
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Hướng dẫn đặt hàng
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Phương thức vận chuyển
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Chính sách đổi trả
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mx-5 mt-10">
                            <p className="font-medium text-white">VỀ CHÚNG TÔI</p>
                            <ul className="text-sm leading-8 text-white">
                                <li>
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Giới thiệu về Vuahaisan
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Chính sách, quy định chung
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Chính sách bảo mật
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mx-5 mt-10">
                            <p className="font-medium text-white">TÀI KHOẢN</p>
                            <ul className="text-sm leading-8 text-white">
                                <li>
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Tài khoản của tôi
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Đăng nhập
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Đăng ký
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Giỏ hàng
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Lịch sử mua hàng
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mx-5 mt-10">
                            <p className="font-medium text-white">THEO DÕI CHÚNG TÔI TRÊN</p>
                            <ul className="text-sm leading-8 text-white">
                                <li className="flex flex-row place-items-center hover:text-orange-300">
                                    <BiLogoFacebookCircle size={18} className="mr-1.5" />
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Facebook
                                    </a>
                                </li>

                                <li className="flex flex-row place-items-center hover:text-orange-300">
                                    <BiLogoLinkedinSquare size={18} className="mr-1.5" />
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Linkedin
                                    </a>
                                </li>

                                <li className="flex flex-row place-items-center hover:text-orange-300">
                                    <BiLogoInstagramAlt size={18} className="mr-1.5" />
                                    <a className="text-white hover:text-orange-300" href="#">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>

                <div className="grid justify-items-center text-slate-500">
                    <p>@ Bản quyền thuộc về Harbor Shop</p>
                </div>
            </div>
        )
    }
}

export default Footer
