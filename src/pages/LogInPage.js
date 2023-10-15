import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function LogInPage() {
    return (
        <div>
            <Navigation />
            <section className="mx-auto mt-10 w-full flex-grow mb-10 max-w-[1200px] px-5">
                <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
                    <div className="flex justify-center">
                        <div className="text-3xl font-bold">ĐĂNG NHẬP</div>
                    </div>

                    <div className="field">


                        <div className="field">


                            <div className="field">
                                <label className="label mt-5 font-medium">Email</label>
                                <div className="control">
                                    <input className="input" type="email" placeholder="nguyenvana@gmail.com" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label mt-5 font-medium">Mật khẩu</label>
                                <div className="control">
                                    <input className="input" type="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;" />
                                </div>
                            </div>

                            <div className="mt-4 flex justify-end">
                                {/* <form className="flex gap-2">
                                    <input type="checkbox" />
                                    <label for="checkbox">Remember me</label>
                                </form> */}
                                <a href="#" className="text-violet-900">Quên mật khẩu?</a>
                            </div>

                            <button className="my-5 w-full py-2 text-white bg-amber-500 rounded">
                                ĐĂNG NHẬP
                            </button>
                            

                            <p className="text-center">
                                Bạn chưa có tài khoản?
                                <a href="/signup" className="text-violet-900 ml-1.5 font-normal">Đăng ký</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>


    )


}

export default LogInPage;