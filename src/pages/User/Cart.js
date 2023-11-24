import { PiTrashLight } from "react-icons/pi";
import PaymentModal from "../../components/PaymentModal";
import { useState } from "react";
import Layout from "../../components/Layouts/Layout";

function Cart() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <Layout title={"Giỏ hàng của bạn"}>
            {/* breadcrumbs */}
            <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
                <ul className="flex items-center">
                    <li className="cursor-pointer">
                        <a href="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                                />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <span className="mx-2 text-gray-500">&gt;</span>
                    </li>
                    <li className="text-gray-500">Giỏ hàng</li>
                </ul>
            </nav>
            {/* breadcrumbs */}
            <div className="flex flex-col h-screen justify-between">
                <div
                    className="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
                >
                    {/* <!-- Desktop cart table  --> */}
                    <div
                        className="hidden h-[600px] w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 md:grid"
                    >
                        <table className="table-fixed">
                            <thead className="h-16 bg-neutral-100">
                                <tr>
                                    <th className="align-middle p-2">SẢN PHẨM</th>
                                    <th className="align-middle">GIÁ</th>
                                    <th className="align-middle" style={{ textAlign: 'center' }}>SỐ LƯỢNG</th>
                                    <th className="align-middle">TỔNG TIỀN</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- 1 --> */}
                                <tr className="h-[100px] border-b">
                                    <td className="align-middle">
                                        <div className="flex">
                                            <img
                                                className="w-[90px]"
                                                src="https://product.hstatic.net/1000030244/product/cua_gach-01_a76583ad7f5740f6a0e6747e3c045395_1024x1024.png"
                                                alt="bedroom image"
                                            />
                                            <div className="ml-3 flex flex-col justify-center">
                                                <p className="text-base font-medium">Cua gạch Cà Mau</p>
                                                <p className="text-sm text-gray-400">500g</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mx-auto text-center align-middle">200,000</td>
                                    <td className="align-middle">
                                        <div className="flex items-center justify-center">
                                            <button
                                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                            >
                                                &minus;
                                            </button>
                                            <div
                                                className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500"
                                            >
                                                1
                                            </div>
                                            <button
                                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                            >
                                                &#43;
                                            </button>
                                        </div>
                                    </td>
                                    <td className="mx-auto text-center align-middle">200,000đ</td>
                                    <td className="align-middle">
                                        <div className="text-rose-600 cursor-pointer hover:text-rose-500"><PiTrashLight size={24} /></div>
                                    </td>
                                </tr>
                                {/* <!-- 2 --> */}
                                <tr className="h-[100px] border-b">
                                    <td className="align-middle">
                                        <div className="flex">
                                            <img
                                                className="w-[90px]"
                                                src="https://product.hstatic.net/1000030244/product/_600___600_px___1080___1080_px___1800___1206_px___1080___1080_px___24__0400981543944694ba9697e04bb68414_1024x1024.png"
                                                alt="Chair Image"
                                            />
                                            <div className="ml-3 flex flex-col justify-center">
                                                <p className="text-base font-medium">Chân cua tuyết</p>
                                                <p className="text-sm text-gray-400">1000g</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mx-auto text-center" style={{ verticalAlign: 'middle' }}>320,000đ</td>
                                    <td className="align-middle">
                                        <div className="flex items-center justify-center">
                                            <button
                                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                            >
                                                &minus;
                                            </button>
                                            <div
                                                className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500"
                                            >
                                                1
                                            </div>
                                            <button
                                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                            >
                                                &#43;
                                            </button>
                                        </div>
                                    </td>
                                    <td className="mx-auto text-center" style={{ verticalAlign: 'middle' }}>320,000đ</td>
                                    <td className="align-middle">
                                        <div className="text-rose-600 cursor-pointer hover:text-rose-500"><PiTrashLight size={24} /></div>
                                    </td>
                                </tr>
                                <tr className="h-[100px] border-b">
                                    <td className="align-middle">
                                        <div className="flex">
                                            <img
                                                className="w-[90px]"
                                                src="https://product.hstatic.net/1000030244/product/bn_31c802667db84419a4411ea7aab79302_1024x1024.jpg"
                                                alt="Chair Image"
                                            />
                                            <div className="ml-3 flex flex-col justify-center">
                                                <p className="text-base font-medium">Bào Ngư Hàn Quốc</p>
                                                <p className="text-sm text-gray-400">1000g</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mx-auto text-center" style={{ verticalAlign: 'middle' }}>250,000đ</td>
                                    <td className="align-middle">
                                        <div className="flex items-center justify-center">
                                            <button
                                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                            >
                                                &minus;
                                            </button>
                                            <div
                                                className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500"
                                            >
                                                1
                                            </div>
                                            <button
                                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                            >
                                                &#43;
                                            </button>
                                        </div>
                                    </td>
                                    <td className="mx-auto text-center" style={{ verticalAlign: 'middle' }}>250,000đ</td>
                                    <td className="align-middle">
                                        <div className="text-rose-600 cursor-pointer hover:text-rose-500"><PiTrashLight size={24} /></div>
                                    </td>
                                </tr>
                                <tr className="h-[100px] border-b">
                                    <td className="align-middle">
                                        <div className="flex">
                                            <img
                                                className="w-[90px]"
                                                src="https://product.hstatic.net/1000030244/product/z2634271839169_ff77f96dc244dab90ba3b344aaa8a895_f23bcd0bf1e44a9eb7cd0cd6493e43ef_1024x1024.jpg"
                                                alt="Chair Image"
                                            />
                                            <div className="ml-3 flex flex-col justify-center">
                                                <p className="text-base font-medium">Tôm Thẻ Tươi</p>
                                                <p className="text-sm text-gray-400">250g</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mx-auto text-center" style={{ verticalAlign: 'middle' }}>100,000đ</td>
                                    <td className="align-middle">
                                        <div className="flex items-center justify-center">
                                            <button
                                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                            >
                                                &minus;
                                            </button>
                                            <div
                                                className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500"
                                            >
                                                1
                                            </div>
                                            <button
                                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                            >
                                                &#43;
                                            </button>
                                        </div>
                                    </td>
                                    <td className="mx-auto text-center" style={{ verticalAlign: 'middle' }}>100,000đ</td>
                                    <td className="align-middle">
                                        <div className="text-rose-600 cursor-pointer hover:text-rose-500"><PiTrashLight size={24} /></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- Summary  --> */}
                    <div className="mx-auto w-full px-4 md:max-w-[400px]">
                        <div className="">
                            <div className="border py-5 px-4 shadow-md">
                                <p className="font-bold">THÔNG TIN HÓA ĐƠN</p>
                                <div className="flex justify-between border-b py-5">
                                    <p>Tổng tiền hàng</p>
                                    <p>870,000đ</p>
                                </div>

                                <div className="flex justify-between border-b py-5">
                                    <p>Tiền vận chuyển</p>
                                    <p>0đ</p>
                                </div>

                                <div className="flex justify-between py-5">
                                    <p>Nhập mã giảm giá (nếu có):</p>
                                    <input type="text" id="discount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5" placeholder="Nhập mã giảm giá "></input>
                                </div>

                                <div className="flex justify-between py-5">
                                    <p>Tổng thanh toán</p>
                                    <p className="text-rose-600 text-base">870,000đ</p>
                                </div>

                                <a href="#">
                                    <button
                                        className="w-full bg-amber-500 px-5 py-2 text-white font-semibold"
                                        onClick={handleOpenModal}
                                    >
                                        TIẾN HÀNH ĐẶT HÀNG
                                    </button>
                                </a>
                                <PaymentModal isOpen={isModalOpen} onClose={handleCloseModal} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart;