import React from "react";
import Layout from "../../components/Layouts/Layout";

const Support = () => {
    return (
        <Layout title={"Hỗ trợ khách hàng"}>
            <div className="p-4 md:w-3/4 lg:w-1/2 mx-auto">
                <h1 className="text-2xl font-bold mb-4">Hỗ trợ</h1>
                <img src="https://ghesong.vn/upload/images/cua-bien--loai-ngon-quan-3.jpg" alt="Seafood Image" className="w-full h-auto mb-4 rounded-md" />
                <p className="mb-4">
                    SEAFOOD HARBOR vinh hạnh nhận được sự quan tâm của Quý Khách Hàng, Đối Tác. Mọi thông tin cần liên hệ và hỗ trợ vui lòng theo thông tin bên dưới.
                </p>
                <p className="mb-4">Địa chỉ văn phòng: 12A Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh</p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">DVKH: <a href="mailto:dvkh@seafoodharbor.vn" className="text-blue-500">dvkh@seafoodharbor.vn</a></li>
                    <li className="mb-2">Liên hệ hợp tác: <a href="mailto:contact@seafoodharbor.vn" className="text-blue-500">contact@seafoodharbor.vn</a></li>
                    <li className="mb-2">Hotline 1900 1118 (8h-21h)</li>
                    <li className="mb-2">Kênh Zalo: <a href="https://zalo.me/seafoodharbor" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://zalo.me/seafoodharbor</a></li>
                    <li className="mb-2">Kênh Messenger: <a href="https://m.me/seafoodharborvn" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://m.me/seafoodharborvn</a></li>
                </ul>
            </div>
        </Layout>
    );
};

export default Support;
