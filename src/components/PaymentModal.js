import React from 'react';
import { useState } from 'react';
import '../styles/main.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import API_DOMAIN from '../config';

const PaymentModal = ({ isOpen, onClose, totalAmount, cartItems, setCartItems, auth, setAuth }) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Thanh toán khi nhận hàng');
    if (!isOpen) return null;
    const paypalIconUrl = 'https://cdn-icons-png.flaticon.com/512/174/174861.png';
    const momoIconUrl = 'https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png';
    const codIconUrl =
        'https://www.mungbaobao.com/upload/news/2019/05/19/12/08/14/icon-thanh-toan-1.png?v=1';
    const internetbankingIconUrl =
        'https://cdn2.iconfinder.com/data/icons/fintech-butterscotch-vol-2/512/Internet_Banking-512.png';
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };
    const getPaymentMethodIcon = (method) => {
        switch (method) {
            case 'MoMo':
                return <img src={momoIconUrl} alt="MoMo Icon" className="w-6 h-6 mr-1 ml-3" />;
            case 'PayPal':
                return <img src={paypalIconUrl} alt="PayPal Icon" className="w-6 h-6 mr-1 ml-3" />;
            case 'Internet Banking':
                return (
                    <img
                        src={internetbankingIconUrl}
                        alt="Internet Banking Icon"
                        className="w-6 h-6 mr-1 ml-3"
                    />
                );
            case 'Cod':
                return <img src={codIconUrl} alt="Cod Icon" className="w-6 h-6 mr-1 ml-3" />;
            default:
                return null;
        }
    };
    const getPaymentMethodName = (method) => {
        return method;
    };
    const handleCompleteOrder = async () => {
        try {
            const orderData = {
                products: cartItems.map((cartItem) => ({
                    productId: cartItem.product.id,
                    name: cartItem.product.name,
                    imageUrl: cartItem.product.imageUrl,
                    price: cartItem.product.price,
                    quantity: cartItem.quantity,
                })),
                status: 'Đang xử lý',
                totalPrice: totalAmount,
                paymentInfo: {
                    method: selectedPaymentMethod,
                    status: 'Đã thanh toán',
                },
            };
            const response = await axios.post(`${API_DOMAIN}/api/order`, orderData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth.token}`,
                },
            });
            const updatedAuth = {
                ...auth,
                user: {
                    ...auth.user,
                    cart: {
                        items: [],
                    },
                },
            };
            setAuth(updatedAuth);
            setCartItems([]);
            console.log('Order created successfully:', response.data);
            toast.success('Đặt hàng thành công, xin cảm ơn quý khách.');
            onClose();
        } catch (error) {
            console.error('Error creating order:', error);
            toast.error('Không thể đặt hàng, vui lòng kiểm tra lại!');
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modalpayment-overlay fixed inset-0 bg-black opacity-50"></div>
            <div className="modalpayment-content bg-white rounded-lg p-8 z-50">
                <h2 className="text-2xl font-semibold mb-5">THANH TOÁN ĐƠN HÀNG</h2>
                <div className="border rounded-md p-4 mb-5">
                    <div className="text-sm font-medium text-gray-600">Địa chỉ nhận hàng:</div>
                    <label className="text-sm font-normal text-gray-600">{auth.user.fullname}</label>
                    <br />
                    <label className="text-sm font-normal text-gray-600">{auth.user.phone}</label>
                    <br />
                    <label className="text-sm font-normal text-gray-600">
                        {auth.user.address}
                    </label>
                </div>
                <div className="mb-4">
                    <p className="text-normal font-medium text-gray-600 mb-4">
                        Lựa chọn phương thức thanh toán:
                    </p>
                    {['MoMo', 'PayPal', 'Internet Banking', 'Cod'].map((method) => (
                        <label className="flex items-center mb-4 cursor-pointer" key={method}>
                            <input
                                type="radio"
                                className="form-radio cursor-pointer"
                                name="paymentMethod"
                                value={method}
                                checked={selectedPaymentMethod === method}
                                onChange={() => setSelectedPaymentMethod(method)}
                            />
                            {getPaymentMethodIcon(method)}
                            <span className="ml-2">{getPaymentMethodName(method)}</span>
                        </label>
                    ))}
                </div>
                <div className="flex justify-between">
                    <div className="text-base font-medium mb-2">
                        Tổng thanh toán:
                        <br />
                        <div className="text-rose-600">{formatPrice(totalAmount)}</div>
                    </div>
                    <button
                        className="bg-emerald-500 font-medium text-white mx-4 px-4 py-2 rounded"
                        onClick={handleCompleteOrder}
                    >
                        THANH TOÁN
                    </button>
                    <button
                        className="bg-neutral-400 font-medium text-white px-4 py-2 rounded"
                        onClick={onClose}
                    >
                        HỦY
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
