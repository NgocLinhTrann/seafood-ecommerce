import { TbTruckDelivery, TbHeadset, TbShieldCheck } from "react-icons/tb";


function ConsBages() {
    return (
        <div className="my-12">
            <section className="container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row">
                {/* 1 */}
                <div
                    className="mx-5 flex flex-row items-center justify-center border-2 rounded-xl border-yellow-400 py-4 px-5"
                >
                    <TbTruckDelivery size={24} />

                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-left text-xs font-bold lg:text-sm">
                            MIỄN PHÍ VẬN CHUYỂN
                        </h3>
                        <p className="text-light text-center text-xs lg:text-left lg:text-sm">
                        Miễn phí vận chuyển cho hóa đơn từ 500K
                        </p>
                    </div>
                </div>

                {/* 2 */}
                <div
                    className="mx-5 flex flex-row items-center justify-center border-2 rounded-xl border-yellow-400 py-4 px-5"
                >
                    <TbHeadset size={24} />

                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-left text-xs font-bold lg:text-sm">
                        CHĂM SÓC KHÁCH HÀNG 24/7
                        </h3>
                        <p className="text-light text-left text-xs lg:text-sm">
                        Hỗ trợ khách hàng mọi lúc
                        </p>
                    </div>
                </div>

                {/* 3 */}
                <div
                    className="mx-5 flex flex-row items-center justify-center border-2 rounded-xl border-yellow-400 py-4 px-5"
                >
                    <TbShieldCheck size={24}/>
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-left text-xs font-bold lg:text-sm">
                        CHÍNH SÁCH HOÀN TIỀN
                        </h3>
                        <p className="text-light text-left text-xs lg:text-sm">
                        Chúng tôi hoàn tiền trong 7 ngày
                        </p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ConsBages;