import React, { useState, useEffect } from "react";
import '../../styles/account.css';
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";

function Profile() {
    const [auth, setAuth] = useAuth();
    const [fullname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (auth?.user) {
            const { email, fullname, phone, gender, avatar, avatarUrl, address } = auth.user;
            setName(fullname);
            setPhone(phone);
            setEmail(email);
            setGender(gender);
            setAddress(address);
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
                    fullname: fullname,
                    email: email,
                    phone: phone,
                    gender: gender,
                    avatar: avatar ? "file selected" : null,
                }) !==
                JSON.stringify({
                    fullname: auth.user.fullname,
                    email: auth.user.email,
                    phone: auth.user.phone,
                    gender: auth.user.gender,
                    avatar: auth.user.avatar ? "file selected" : null,
                });

            if (!hasChanged) {
                toast.error("Không có gì để cập nhật");
                return;
            }
            const formData = new FormData();
            const fields = ["fullname", "email", "phone", "gender", "address"];
            fields.forEach((field) => {
                if (auth.user[field] !== eval(field)) {
                    formData.append(field, eval(field));
                } else {
                    formData.append(field, auth.user[field]);
                }
            });
            if (avatar) {
                formData.append("avatar", avatar);
            }
            const response = await axios.put(
                "https://seafoodharbor.azurewebsites.net/api/user/info",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            const newData = response.data.data.newUser;
            setName(newData.fullname);
            setPhone(newData.phone);
            setEmail(newData.email);
            setGender(newData.gender);
            setAddress(newData.address);
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
            console.error("Error updating user information", error);
            toast.error("Error updating user information");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className='bgcolor-app-gray'>
            <div className='right-main-box tab-content box-border bg-white current' id="profile">
                <div className="box-heading py-4 px-6 m-0 box-border block">
                    <div className="line-title m-0 p-0 box-border block">
                        <h2 className='font-semibold mb-0 text-2xl'>Thông tin tài khoản</h2>
                    </div>
                </div>
                <div className='box-info-account py-4 px-6 box-border block'>
                    <div className="form-update max-w-xl m-0 p-0 block box-border font-medium" id="customer_update_form">
                        <div className="form__line-wrapper flex items-center mb-4 text-base text-left box-border">
                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'>Họ tên</label>
                            <div className="form__input-wrapper pl-8 w-3/4">
                                <input
                                    required
                                    type="text"
                                    id="customer-name"
                                    className="form-control outline-none border rounded border-gray-300 px-4 py-2 w-full"
                                    name="fullname"
                                    size="40"
                                    value={fullname}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form__line-wrapper flex items-center mb-4 box-border">
                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'>Giới tính</label>
                            <div className="form__radio-wrapper grow-0 shrink-0 w-3/4 mb-0 pl-8 flex items-center box-border">
                                <div className="box-radio items-center flex">
                                    <input
                                        id="radio2"
                                        type="radio"
                                        value="male"
                                        name="gender"
                                        checked={gender === "Male"}
                                        onChange={() => setGender("Male")} />
                                    <label className='pl-1' for="radio2">Nam</label>
                                </div>
                                <div className="box-radio items-center flex ml-4">
                                    <input
                                        id="radio1"
                                        type="radio"
                                        value="female"
                                        name="gender"
                                        checked={gender === "Female"}
                                        onChange={() => setGender("Female")} />
                                    <label className='pl-1' for="radio1">Nữ</label>
                                </div>
                            </div>
                        </div>
                        <div className="form__line-wrapper flex items-center mb-4 border-gray-300 pb-2">
                            <label className='w-1/4 text-right text-gray-600'>Số điện thoại</label>
                            <div className="form__input-wrapper pl-8 w-3/4">
                                <input
                                    required
                                    type="text"
                                    id="customer-phone"
                                    className="form-control outline-none border rounded border-gray-300 px-4 py-2 w-full"
                                    name="phone"
                                    size="40"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form__line-wrapper flex items-center mb-4 box-border">
                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'>Email</label>
                            <div className="form__input-wrapper pl-8 w-3/4">
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    className="form-control outline-none border rounded border-gray-300 px-4 py-2 w-full"
                                    name="email"
                                    size="40"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled
                                />
                            </div>
                        </div>
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
                        <div className="form__line-wrapper flex items-center mb-4 text-base text-left box-border">
                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'>Địa chỉ</label>
                            <div className="form__input-wrapper pl-8 w-3/4">
                                <input
                                    type="text"
                                    id="customer-address"
                                    className="form-control outline-none border rounded border-gray-300 px-4 py-2 w-full"
                                    name="address"
                                    size="40"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
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
    )
}

export default Profile;