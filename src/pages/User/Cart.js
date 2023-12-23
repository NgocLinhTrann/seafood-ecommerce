import { PiTrashLight } from "react-icons/pi";
import PaymentModal from "../../components/PaymentModal";
import { useState, useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { useAuth } from "../../context/auth";

function Cart() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [auth, setAuth] = useAuth();
    useEffect(() => {
        const fetchCartInfo = async () => {
            try {
                const response = await axios.get(
                    "https://seafoodharbor.azurewebsites.net/api/userCartInfo",
                    {
                        headers: {
                            Authorization: `Bearer ${auth.token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                setCartItems(response.data.cart);
            } catch (error) {
                console.error("Error fetching user cart information:", error);
            }
        };

        fetchCartInfo();
    }, []);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };
    const totalOrderAmount = cartItems.reduce(
        (total, cartItem) =>
            total + Number(cartItem.product.price) * cartItem.quantity,
        0
    );
    const totalAmountWithShipping = totalOrderAmount + 30000;
    return (
        <Layout title={"Giỏ hàng"}>
            <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
                <ul className="flex items-center">
                    <NavLink
                        to="/">
                        <FaHome size={21} />
                    </NavLink>
                    <li>
                        <span className="mx-2 text-gray-500">&gt;</span>
                    </li>
                    <li className="text-gray-500">Giỏ hàng</li>
                </ul>
            </nav>
            <div className="flex flex-col h-screen justify-between max-w-[1200px] mx-auto">
                <div
                    className="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
                >
                    <div
                        className="bg-white ml-5 rounded z-10 hidden border shadow-md h-[600px] w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 md:grid"
                    >
                        <table className="table-fixed">
                            <thead className="h-16">
                                <tr>
                                    <th className="align-middle p-2">SẢN PHẨM</th>
                                    <th className="align-middle">GIÁ</th>
                                    <th className="align-middle" style={{ textAlign: 'center' }}>SỐ LƯỢNG</th>
                                    <th className="align-middle">TỔNG TIỀN</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((cartItem) => (
                                    <tr key={cartItem.product.id} className="h-[100px] border-b">
                                        <td className="align-middle">
                                            <div className="flex">
                                                <img
                                                    className="w-[90px]"
                                                    src={cartItem.product.imageUrl}
                                                    alt={cartItem.product.name}
                                                />
                                                <div className="ml-3 flex flex-col justify-center">
                                                    <p className="text-base font-medium">{cartItem.product.name}</p>
                                                    <p className="text-sm text-gray-400">{cartItem.product.weight}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="mx-auto text-center" style={{ verticalAlign: 'middle' }}>
                                            {formatPrice(Number(cartItem.product.price))}
                                        </td>
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
                                                    {cartItem.quantity}
                                                </div>
                                                <button
                                                    className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                                >
                                                    &#43;
                                                </button>
                                            </div>
                                        </td>
                                        <td className="mx-auto text-center" style={{ verticalAlign: 'middle' }}>
                                            {formatPrice(Number(cartItem.product.price) * cartItem.quantity)}
                                        </td>
                                        <td className="align-middle">
                                            <div className="text-rose-600 cursor-pointer hover:text-rose-500"><PiTrashLight size={24} /></div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="z-10 bg-white mx-auto w-full px-4 md:max-w-[400px]">
                        <div className="">
                            <div className="border rounded py-5 px-4 shadow-md">
                                <p className="font-bold">THÔNG TIN HÓA ĐƠN</p>
                                <div className="flex justify-between border-b py-5">
                                    <p>Tổng tiền hàng</p>
                                    <p>{formatPrice(totalOrderAmount)}</p>
                                </div>

                                <div className="flex justify-between border-b py-5">
                                    <p>Tiền vận chuyển</p>
                                    <p>{formatPrice(30000)}</p>
                                </div>
                                <div className="flex justify-between py-5">
                                    <p>Nhập mã giảm giá (nếu có):</p>
                                    <input
                                        type="text"
                                        id="discount"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Nhập mã giảm giá "
                                    />
                                </div>
                                <div className="flex justify-between py-5">
                                    <p>Tổng thanh toán</p>
                                    <p className="text-rose-600 text-base">
                                        {formatPrice(totalAmountWithShipping)}
                                    </p>
                                </div>
                                <div>
                                    <button
                                        className="w-full bg-amber-500 px-5 py-2 text-white font-semibold"
                                        onClick={handleOpenModal}
                                    >
                                        TIẾN HÀNH ĐẶT HÀNG
                                    </button>
                                </div>
                                <PaymentModal
                                    isOpen={isModalOpen}
                                    onClose={handleCloseModal}
                                    totalAmount={totalAmountWithShipping}
                                    cartItems={cartItems}
                                    auth={auth}
                                    setAuth={setAuth}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart;