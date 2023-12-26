import React from "react";
import Layout from "../../components/Layouts/Layout";

const Instruction = () => {
    return (
        <Layout title={"Hướng dẫn mua hàng"}>
            <div className="flex justify-center items-center py-4">
                <div className="px-4 w-1/2 ">
                    <div className="mb-4 text-2xl font-bold">Hướng dẫn đặt hàng</div>
                    <ul className="list-decimal pl-6 mb-4">
                        <li className="mb-2">
                            Đặt hàng qua điện thoại: Bạn vui lòng gọi qua số 19000098 (8h-21h từ T2-T7; 17h Chủ Nhật) để được tư vấn sản phẩm và đặt hàng. Ngoài ra Bạn có thể Chat qua Fanpage Đảo Hải Sản: <a href="#" className="text-blue-500">www.facebook.com/seafoodharbor</a> 24/24 để đặt hàng.
                        </li>
                        <li className="mb-2">
                            Đặt hàng qua website:
                            <ul className="list-decimal pl-6 mb-2">
                                <li className="mb-1">Bước 1: Tìm kiếm sản phẩm trong ô tìm kiếm hoặc lựa chọn sản phẩm bạn muốn mua trong danh mục tại website: <a href="https://seafood-harbor.vercel.app/" className="text-blue-500">seafoodharbor.vn</a></li>
                                <li className="mb-1">Bước 2: Bấm vào sản phẩm bạn muốn mua và xem kỹ thông tin sản phẩm, nếu bạn quyết định mua hàng thì bấm vào nút Mua Ngay hoặc thêm vào giỏ hàng.</li>
                                <li className="mb-1">Bước 3: Bấm vào nút thanh toán và điền thông tin nhận hàng để Đảo Hải Sản liên hệ giao hàng cho bạn. Bạn muốn tiếp tục mua thì nhấn vào nút “Tiếp Tục Mua Hàng”.</li>
                                <li> Bước 4: Chờ xác nhận giao hàng, kiểm tra và nhận hàng.</li>
                            </ul>
                        </li>
                    </ul>
                    <img src="https://egoexpress.vn/wp-content/uploads/2022/03/chuyen-phat-nhanh-hai-sai-tuoi-song.jpg" alt="Seafood "></img>
                </div>
            </div>
        </Layout>
    )
};


export default Instruction;