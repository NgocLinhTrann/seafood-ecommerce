import React from "react";
import Layout from "../../components/Layouts/Layout";

const About = () => {
    return (
        <Layout title={"Về chúng tôi - Seafood Harbor"}>
            <div className="p-4 md:w-3/4 lg:w-1/2 mx-auto">
                <h1 className="text-2xl font-bold mb-4">Về chúng tôi</h1>
                <p className="mb-4 text-base">
                    SEAFOOD HARBOR ra đời vào năm 2023 từ một hòn đảo nhỏ thuộc Thành Phố Cam Ranh, Khánh Hoà. Xuất phát với mong muốn là cầu nối giúp những người dân đưa đến tay người tiêu dùng những hải sản sạch từ vùng biển đẹp, hoang sơ được đánh bắt và nuôi trồng hoàn toàn tự nhiên.
                </p>
                <div className="flex flex-wrap justify-between mb-4">
                    <img src="https://thegioihaisan.vn/wp-content/uploads/2023/03/nha-hang-hai-san-ngon-chat-luong-gia-ca-hop-li-nhat-tai-ha-noi4.jpg" alt="Seafood Image" className="w-48 h-48 object-cover mb-2" />
                    <img src="https://canghaisan.com/wp-content/uploads/2021/04/18.jpg" alt="Seafood Image" className="w-48 h-48 object-cover mb-2" />
                    <img src="https://lh3.googleusercontent.com/57uJ4a2QN8CMNl3aZou7t3Gso9LL2Ds2MVowxmvI5ayxfaQ29FZeQ6NlF3SwAx7RPQ0UL-A_6JZ3uuoa0cVYsc0lLVIiRC11Gt7pC5ibXPtI70JpfJQVTZucR46Ho6TBkwH0t8kUwP6lFLAA_dv_yy0" alt="Seafood Image" className="w-48 h-48 object-cover mb-2" />
                </div>
                <p className="mb-4">
                    SEAFOOD HARBOR trong tương lai có mục tiêu cung cấp cho hơn 150,000 Khách Hàng mỗi năm với hàng trăm ngàn đơn hàng và sẽ là đối tác thân thiết với các hệ thống siêu thị lớn như: Aeon, Lotte, Winmart, Emart, Kingfood và các nhà hàng lớn như White Palace, New World, Pizza4Ps, Gem Center.
                </p>
                <img src="https://toquoc.mediacdn.vn/280518851207290880/2021/11/19/photo-1-16373107425231563746683-1637326993581-1637326994238114146876.jpg" alt="Seafood Image" className="w-full h-auto mb-2" />
                <p className="mb-4">
                    Sự Hài Lòng và Niềm Tin của Khách Hàng là điều mà chúng tôi đặt lên hàng đầu trong suốt quá trình kinh doanh, chúng tôi nỗ lực mỗi ngày để cung cấp đến tay khách hàng những sản phẩm NGON NHẤT, SẠCH NHẤT và DỊCH VỤ KHÁCH HÀNG TỐT NHẤT.
                </p>
                <img src="https://thegioihaisan.vn/wp-content/uploads/2016/06/IMG_6226z1.jpg" alt="Seafood Image" className="w-full h-auto mb-2" />
            </div>
        </Layout>
    );
};

export default About;
