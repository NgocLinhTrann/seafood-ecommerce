import { PiTrashLight } from 'react-icons/pi';
import PaymentModal from '../../components/PaymentModal';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layouts/Layout';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import API_DOMAIN from '../../config';

function Cart() {
    const [auth, setAuth] = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [promoCode, setPromoCode] = useState('');
    const [promoCodeInfo, setPromoCodeInfo] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    const [promoCodeAttempted, setPromoCodeAttempted] = useState(false);

    useEffect(() => {
        const fetchCartInfo = async () => {
            try {
                const response = await axios.get(`${API_DOMAIN}/api/userCartInfo`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                        'Content-Type': 'application/json',
                    },
                });
                setCartItems(response.data.cart);
            } catch (error) {
                console.error('Error fetching user cart information:', error);
            }
        };
        fetchCartInfo();
    }, []);
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };
    const totalOrderAmount = cartItems.reduce(
        (total, cartItem) => {
            const productPrice = cartItem.product.price || 0;
            return total + productPrice * cartItem.quantity;
        },
        0
    );
    const totalAmountWithShipping = totalOrderAmount + 30000;
    const handleDecreaseQuantity = (productId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.product.id === productId) {
                const newQuantity = Math.max(item.quantity - 1, 0);
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };
    const handleIncreaseQuantity = (productId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.product.id === productId) {
                const newQuantity = item.quantity + 1;
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };
    // const handleApplyPromoCode = async () => {
    //     try {
    //         const response = await axios.get(`${API_DOMAIN}/api/promocode/${promoCode}`, {
    //             headers: {
    //                 'Authorization': `Bearer ${auth.token}`,
    //             },
    //         });
    //         const promoCodeData = response.data.promoCode;
    //         console.log('Promo code applied successfully:', response.data.message);
    //         setPromoCodeInfo(promoCodeData);
    //         setTotalAmount(calculateTotalAmountWithPromoCode());
    //     } catch (error) {
    //         console.error('Error applying promo code:', error);
    //         setPromoCodeInfo(null);
    //     } 
    // };
    const handleApplyPromoCode = async () => {
        try {
            const response = await axios.get(`${API_DOMAIN}/api/promocode/${promoCode}`, {
                headers: {
                    'Authorization': `Bearer ${auth.token}`,
                },
            });
            const promoCodeData = response.data.promoCode;
            console.log('Promo code applied successfully:', response.data.message);
            setPromoCodeInfo(promoCodeData);
        } catch (error) {
            console.error('Error applying promo code:', error);
            setPromoCodeInfo(null);
        } finally {
            setPromoCodeAttempted(true);
            setTotalAmount(calculateTotalAmountWithPromoCode());
        }
    };
    const calculateTotalAmountWithPromoCode = () => {
        const totalAmountBeforeDiscount = totalAmountWithShipping;
        if (promoCodeInfo) {
            const discountValue = totalAmountBeforeDiscount * promoCodeInfo.value;
            return totalAmountBeforeDiscount - discountValue;
        }
        return totalAmountBeforeDiscount;
    };
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <Layout title={'Giỏ hàng'}>
            <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
                <ul className="flex items-center">
                    <NavLink to="/">
                        <FaHome size={21} />
                    </NavLink>
                    <li>
                        <span className="mx-2 text-gray-500">&gt;</span>
                    </li>
                    <li className="text-gray-500">Giỏ hàng</li>
                </ul>
            </nav>
            <div className="flex flex-col h-screen justify-between max-w-[1200px] mx-auto">
                <div className="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
                    <div className="bg-white ml-5 rounded z-10 hidden border shadow-md h-[600px] w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 md:grid">
                        <table className="table-fixed">
                            <thead className="h-16">
                                <tr>
                                    <th className="align-middle p-2">SẢN PHẨM</th>
                                    <th className="align-middle">GIÁ</th>
                                    <th className="align-middle" style={{ textAlign: 'center' }}>
                                        SỐ LƯỢNG
                                    </th>
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
                                                    <p className="text-base font-medium">
                                                        {cartItem.product.name}
                                                    </p>
                                                    <p className="text-sm text-gray-400">
                                                        {cartItem.product.weight}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            className="mx-auto text-center"
                                            style={{ verticalAlign: 'middle' }}
                                        >
                                            {formatPrice(Number(cartItem.product.price))}
                                        </td>
                                        <td className="align-middle">
                                            <div className="flex items-center justify-center">
                                                <button
                                                    className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                                    onClick={() => handleDecreaseQuantity(cartItem.product.id)}
                                                >
                                                    &minus;
                                                </button>
                                                <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                                                    {cartItem.quantity}
                                                </div>
                                                <button
                                                    className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                                    onClick={() => handleIncreaseQuantity(cartItem.product.id)}
                                                >
                                                    &#43;
                                                </button>
                                            </div>
                                        </td>
                                        <td
                                            className="mx-auto text-center"
                                            style={{ verticalAlign: 'middle' }}
                                        >
                                            {formatPrice(
                                                Number(cartItem.product.price) * cartItem.quantity
                                            )}
                                        </td>
                                        {/* <td className="align-middle">
                                            <div className="text-rose-600 cursor-pointer hover:text-rose-500" onClick={() => handleRemoveCartItem(cartItem.product.id)}>
                                                <PiTrashLight size={24} />
                                            </div>
                                        </td> */}
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
                                    <p className='mr-1'>Nhập mã giảm giá (nếu có):</p>
                                    <input
                                        type="text"
                                        id="discount"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Nhập mã giảm giá"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                    />
                                    <button
                                        class="ml-2 bg-blue-500 text-xs text-white px-3 py-1 rounded hover:bg-blue-400" style={{ marginBottom: 24 + 'px' }}
                                        onClick={handleApplyPromoCode}
                                    >
                                        Áp dụng
                                    </button>
                                </div>
                                {promoCodeInfo ? (
                                    <div className="flex text-sm justify-between py-5 text-emerald-500">
                                        <p>Chúc mừng! Mã giảm giá hợp lệ, bạn được giảm {promoCodeInfo.value * 100} %</p>
                                    </div>
                                ) : null}
                                {promoCodeAttempted && !promoCodeInfo ? (
                                    <div className="flex text-sm justify-between py-5 text-rose-600">
                                        <p>Bạn chưa nhập mã giảm giá hoặc mã giảm giá không hợp lệ!</p>
                                    </div>
                                ) : null}
                                <div className="flex justify-between py-5">
                                    <p>Tổng thanh toán</p>
                                    <p className="text-rose-600 text-base">
                                        {formatPrice(calculateTotalAmountWithPromoCode())}
                                    </p>
                                </div>
                                <div>
                                    <button
                                        className="w-full rounded bg-amber-500 px-5 py-2 text-white font-semibold hover:bg-amber-400"
                                        onClick={handleOpenModal}
                                    >
                                        TIẾN HÀNH ĐẶT HÀNG
                                    </button>
                                </div>
                                <PaymentModal
                                    isOpen={isModalOpen}
                                    onClose={handleCloseModal}
                                    totalAmount={calculateTotalAmountWithPromoCode()}
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                    auth={auth}
                                    setAuth={setAuth}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Cart;
