import React from "react";
const PaymentModal = ({ isOpen, onClose, totalCost }) => {
    if (!isOpen) return null;
    const paypalIconUrl = 'https://cdn-icons-png.flaticon.com/512/174/174861.png';
    const momoIconUrl = 'https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png';
    const codIconUrl = 'https://www.mungbaobao.com/upload/news/2019/05/19/12/08/14/icon-thanh-toan-1.png?v=1';

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
            <div className="modal-content bg-white rounded-lg p-8 z-50">
                <h2 className="text-2xl font-semibold mb-5">THANH TOÁN ĐƠN HÀNG</h2>
                <div className="border rounded-md p-4 mb-5">
                    <div className="text-sm font-medium text-gray-600">
                        Địa chỉ nhận hàng:
                    </div>
                    <label className="text-sm font-normal text-gray-600">
                        Nguyễn Văn A
                    </label>
                    <br/>
                    <label className="text-sm font-normal text-gray-600">
                        0367191290
                    </label>
                    <br/>
                    <label className="text-sm font-normal text-gray-600">
                        203 Lê Văn Việt, Phường Hiệp Phú, Thành phố Thủ Đức
                    </label>
                </div>
                <div className="mb-4">
                    <p className="text-normal font-medium text-gray-600 mb-4">Lựa chọn phương thức thanh toán:</p>
                    <label className="flex items-center mb-4 cursor-pointer">
                        <input type="radio" className="form-radio cursor-pointer" name="paymentMethod" value="paypal" />
                        <img src={paypalIconUrl} alt="PayPal Icon" className="w-6 h-6 mr-2 ml-2" />
                        <span className="ml-2">
                            PayPal
                        </span>
                    </label>
                    <label className="flex items-center mb-4 cursor-pointer">
                        <input type="radio" className="form-radio cursor-pointer" name="paymentMethod" value="momo" />
                        <img src={momoIconUrl} alt="Momo Icon" className="w-6 h-6 mr-2 ml-2" />
                        <span className="ml-2">Momo</span>
                    </label>
                    <label className="flex items-center mb-4 cursor-pointer">
                        <input type="radio" className="form-radio cursor-pointer" name="paymentMethod" value="cod" />
                        <img src={codIconUrl} alt="Cod Icon" className="w-6 h-6 mr-2 ml-2" />
                        <span className="ml-2">Thanh toán khi nhận hàng</span>
                    </label>
                </div>

                <div className="flex justify-between">
                    <div className="text-base font-medium mb-2">Tổng thanh toán:
                        <br/>
                        <div className="text-rose-600">
                            870,000{totalCost}đ
                        </div>
                    </div>
                    <button className="bg-amber-500 font-medium text-white px-4 py-2 rounded" onClick={onClose}>
                        THANH TOÁN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;