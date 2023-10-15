import Sidebar from "../components/Sidebar";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Avatar from "../assets/images/avatar-photo.jpg";

function ProfileInformation() {
    return (
        <div>
            <Navigation />
            <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
                <Sidebar />

                {/* Main */}
                <section
                    className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10"
                >
                    <div className="py-5">
                        <div className="w-full">
                            <h2>Ảnh đại diện</h2>
                            <div
                                className="mx-auto mb-5 flex flex-row items-center bg-neutral-100 py-5 lg:mx-0 lg:w-1/2"
                            >
                                <img
                                    className="ml-5 h-20 w-20 rounded-full"
                                    src={Avatar}
                                    alt="Account image"
                                />

                                <form>
                                    <div>
                                        <label className="block">
                                            <span className="sr-only">Choose profile photo</span>
                                            <input
                                                type="file"
                                                className="mx-auto ml-5 flex w-full justify-center border-yellow-400 text-sm outline-none file:mr-4 file:bg-amber-400 file:py-2 file:px-4 file:text-sm file:font-semibold"
                                            />
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <form className="flex w-full flex-col gap-3" action="">
                            <div className="flex w-full flex-col">
                                {/* <label className="flex" for="name"
                                >Tên đầy đủ<span
                                    className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                                ></span></label> */}
                                <label className="flex" for="name">Tên đầy đủ</label>
                                <input
                                    className="mt-3 w-full border px-4 py-2 lg:w-1/2"
                                    type="text"
                                    placeholder="Nguyễn Văn A"
                                />

                                <label className="flex mt-5">Giới tính</label>
                                <div className="control mt-3 flex justify-normalh">
                                    <label className="radio">
                                        <input classNameName="mr-1" type="radio" name="gender" />
                                        Nam
                                    </label>
                                    <label className="radio ml-5">
                                        <input classNameName="mr-1" type="radio" name="gender" />
                                        Nữ
                                    </label>
                                </div>

                                <label className="flex mt-5">Số điện thoại</label>
                                <input
                                    className="mt-3 w-full border px-4 py-2 lg:w-1/2"
                                    type="tel"
                                    placeholder="0391222927"
                                />
                            </div>

                            <div className="flex flex-col">

                                <button className="mt-4 w-40 bg-amber-500 px-4 py-2 text-white">
                                    Lưu thay đổi
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* /Main */}
            </section>
            <Footer />
        </div>
    )
}

export default ProfileInformation;