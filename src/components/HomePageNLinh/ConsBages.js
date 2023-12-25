import React from 'react';
import { TbTruckDelivery, TbHeadset, TbShieldCheck } from 'react-icons/tb';

const ConsBages = () => {
    return (
        <div className="my-12">
            <section className="container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row">
                {/* 1 */}
                <Badge icon={<TbTruckDelivery size={24} />} title="MIỄN PHÍ VẬN CHUYỂN" description="Miễn phí vận chuyển cho hóa đơn từ 500K" />

                {/* 2 */}
                <Badge icon={<TbHeadset size={24} />} title="CHĂM SÓC KHÁCH HÀNG 24/7" description="Hỗ trợ khách hàng mọi lúc" />

                {/* 3 */}
                <Badge icon={<TbShieldCheck size={24} />} title="CHÍNH SÁCH HOÀN TIỀN" description="Chúng tôi hoàn tiền trong 7 ngày" />
            </section>
        </div>
    );
};

const Badge = ({ icon, title, description }) => {
    return (
        <div className="mx-5 flex flex-row items-center justify-center border-2 rounded-xl border-yellow-400 py-4 px-5">
            {icon}

            <div className="ml-6 flex flex-col justify-center">
                <h3 className="text-left text-xs font-bold lg:text-sm">{title}</h3>
                <p className="text-light text-left text-xs lg:text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ConsBages;
