import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function SignUpPage() {
    return (
        <div>
            <Navigation />
            <section className="mx-auto mt-10 w-full flex-grow mb-10 max-w-[1200px] px-5">
                <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
                    <div className="flex justify-center">
                        <div className="text-3xl font-bold">ĐĂNG KÝ</div>
                    </div>

                    <div className="field">
                        <label className="label mt-5 font-medium">Tên đầy đủ</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Nguyễn Văn A" />
                        </div>

                        <div className="field">
                            <label className="label mt-5 font-medium">Giới tính</label>
                            <div className="control flex justify-normalh">
                                <label className="radio">
                                    <input classNameName="mr-1" type="radio" name="gender" />
                                    Nam
                                </label>
                                <label className="radio ml-5">
                                    <input classNameName="mr-1" type="radio" name="gender" />
                                    Nữ
                                </label>
                            </div>

                            <div className="field">
                                <label className="label mt-5 font-medium">Email</label>
                                <div className="control">
                                    <input className="input" type="email" placeholder="nguyenvana@gmail.com" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label mt-5 font-medium">Địa chỉ</label>
                                <div className="control flex justify-between">
                                    <div className="select">
                                        <select>
                                            <option>Tỉnh/TP</option>
                                            <option>Hồ Chí Minh</option>
                                            <option>Hà Nội</option>
                                            <option>Hải Phòng</option>
                                        </select>
                                    </div>

                                    <div className="select ml-2">
                                        <select>
                                            <option>Quận/Huyện</option>
                                            <option>Thủ Đức</option>
                                            <option>Quận 9</option>
                                            <option>Bình Thạnh</option>
                                        </select>
                                    </div>

                                    <div className="select ml-2">
                                        <select>
                                            <option>Phường/Xã</option>
                                            <option>Linh Trung</option>
                                            <option>Linh Xuân</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="control mt-3 font-medium">
                                    <input className="input" type="text" placeholder="Số nhà/tên đường" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label mt-5 font-medium">Số điện thoại</label>
                                <div className="control">
                                    <input className="input" type="tel" placeholder="0391222927" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label mt-5 font-medium">Mật khẩu</label>
                                <div className="control">
                                    <input className="input" type="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;" />
                                </div>
                            </div>

                            <button className="my-5 w-full py-2 text-white bg-amber-500 rounded">
                                TẠO TÀI KHOẢN
                            </button>

                            <p className="text-center">
                                Bạn đã có tài khoản?
                                <a href="login.html" className="text-violet-900 ml-1.5 font-normal">Đăng nhập</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default SignUpPage;