import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://daohaisan.azurewebsites.net/api/user/login", {
                email,
                password
            });
            if (res && res.data.message === "Successfully") {
                toast.success("Đăng nhập thành công!");
                setTimeout(() => navigate("/"), 200);
                // Store the token (res.data.data.token) and other user information as needed
                // You can use local storage or state management for this
            } else {
                toast.error("Đăng nhập không thành công, hãy kiểm tra lại!");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout title={"Đăng nhập"}>
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
                                    <input
                                        className="input"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="nguyenvana@gmail.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label mt-5 font-medium">Mật khẩu</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <a href="#" className="text-violet-900">Quên mật khẩu?</a>
                            </div>
                            <button onClick={handleSubmit} type="submit" className="my-5 w-full py-2 text-white bg-amber-500 rounded">
                                ĐĂNG NHẬP
                            </button>
                            <p className="text-center">
                                Bạn chưa có tài khoản?
                                <Link to="/register" className="text-violet-900 ml-1.5 font-normal">Đăng ký</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default LogIn;