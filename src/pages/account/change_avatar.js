import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/MyAccount/Sidebar';
import { useAuth } from "../../context/auth";
import Layout from '../../components/Layouts/Layout';
import toast from "react-hot-toast";
import axios from "axios";
import '../../styles/account.css';

function ChangeAvatar() {
    const [auth, setAuth] = useAuth();
    const [avatar, setAvatar] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (auth?.user) {
            const { avatar, avatarUrl } = auth.user;
            setAvatarUrl(avatarUrl);
            setAvatar(avatar);
            setAvatarPreview(avatar);
        }
    }, [auth?.user]);
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
        setAvatarPreview(URL.createObjectURL(file));
    };
    const handleSubmit = async () => {
        try {
            setLoading(true);
            const hasChanged =
                JSON.stringify({
                    avatar: avatar ? "file selected" : null,
                }) !==
                JSON.stringify({
                    avatar: auth.user.avatar ? "file selected" : null,
                });

            if (!hasChanged) {
                toast.error("Không có gì để cập nhật");
                return;
            }
            const formData = new FormData();
            if (avatar) {
                formData.append("avatar", avatar);
            }
            const response = await axios.put(
                "https://seafoodharbor.azurewebsites.net/api/user/changeAvatar",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            const newData = response.data.data.newUser;
            setAvatarPreview(newData.avatar);
            if (newData.avatarUrl) {
                setAvatarUrl(newData.avatarUrl);
            }
            setAuth({ token: auth.token, user: newData });
            let ls = localStorage.getItem("auth");
            ls = JSON.parse(ls);
            console.log("Before updating local storage:", ls);
            ls.user = newData;
            localStorage.setItem("auth", JSON.stringify(ls));
            console.log("After updating local storage:", localStorage.getItem("auth"));
            toast.success(response.data.message);
        } catch (error) {
            console.error("Error updating user avatar", error);
            toast.error("Error updating user avatar");
        } finally {
            setLoading(false);
        }
    };
    return (
        <Layout title="Thay đổi ảnh đại diện">
            <div className='bgcolor-app-gray'>
                <div className='container-fluid max-w-screen-xl mx-auto px-2.5 pt-4 pb-2.5 pt-0 w-full block'>
                    <div className='row -mr-2 -ml-2 flex flex-wrap border-box text-left'>
                        <Sidebar activePage="changeavatar"/>
                        <div className='order-2 mb-6 px-2 grow-0 shrink-0 w-3/4 relative p-0 box-border block text-left colright'>
                            <div className='right-main-box tab-content box-border bg-white current' id="profile">
                                <div className="box-heading py-4 px-6 m-0 box-border block">
                                    <div className="line-title m-0 p-0 box-border block">
                                        <h2 className='font-semibold mb-0 text-2xl'>Thay đổi ảnh đại diện</h2>
                                    </div>
                                </div>
                                <div className='box-info-account py-4 px-6 box-border block'>
                                    <div className="form-update max-w-xl m-0 p-0 block box-border font-medium" id="customer_update_form">
                                        <div className="form__line-wrapper flex items-center mb-4 box-border">
                                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'>Ảnh đại diện hiện tại</label>
                                            <div className="form__input-wrapper pl-8 w-3/4">
                                                <img
                                                    src={avatarUrl}
                                                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                                                    alt="Current Avatar"
                                                    className="form-control outline-none border border-gray-300 px-4 py-2 w-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="form__line-wrapper flex items-center mb-4 box-border">
                                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'>Thay đổi ảnh đại diện</label>
                                            <div className="form__input-wrapper pl-8 w-3/4">
                                                <input
                                                    type="file"
                                                    onChange={handleAvatarChange}
                                                    src={avatarUrl}
                                                    className="form-control outline-none border border-gray-300 px-4 py-2 w-full"
                                                    accept="image/*"
                                                />
                                            </div>
                                        </div>
                                        <div className="form__line-wrapper flex items-center mb-4 box-border">
                                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'></label>
                                            <div className="form__input-wrapper pl-8 w-3/4">
                                                {avatarPreview && (
                                                    <img
                                                        src={avatarPreview}
                                                        alt="Avatar Preview"
                                                        className="form-control outline-none border border-gray-300 px-4 py-2 w-full"
                                                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="form__line-wrapper flex items-center mb-4 box-border">
                                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'></label>
                                            <div className="form__input-wrapper grow-0 shrink-0 w-3/4 mb-0 pl-8 flex items-center box-border">
                                                <button
                                                    onClick={handleSubmit}
                                                    className="text-sm font-medium text-white rounded bgcolor-app-primary relative inline-block py-2.5 px-7"
                                                >
                                                    {loading ? (
                                                        <div role="status" className="ml-4">
                                                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                            </svg>
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                    ) : (
                                                        "LƯU THAY ĐỔI"
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ChangeAvatar;