import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/MyAccount/Sidebar';
import { useAuth } from "../../context/auth";
import Layout from '../../components/Layouts/Layout';
import toast from "react-hot-toast";
import axios from "axios";
import { FaEye, FaEyeSlash  } from "react-icons/fa";

function ChangePassword() {
  const [auth, setAuth] = useAuth();
  const [password, setPassword] = useState();
  const [newpassword, setNewPassword] = useState();
  const [retypePassword, setRetypePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    if (auth?.user) {
      const { password } = auth.user;
      setPassword(password);
    }
  }, [auth?.user]);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (newpassword !== retypePassword) {
        console.error("New password and retype password do not match");
        toast.error("Mật khẩu nhập lại không trùng với mật khẩu mới");
        return;
      }
      const data = {
        password: newpassword
      }
      const response = await axios.put('https://seafoodharbor.azurewebsites.net/api/user/changePass', data, {
        headers: {
          'Authorization': `Bearer ${auth.token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log("99-response.data: ");
      console.log(response.data);
      const newData = response.data.data.newUser;
      const updatedPassword = newData.password;
      setPassword(updatedPassword);
      setAuth({ token: auth.token, user: newData });

      console.log("99-newData.password: ");
      console.log(newData.password);

      let ls = localStorage.getItem("auth");
      ls = JSON.parse(ls);
      console.log("Before updating local storage:", ls);
      ls.user = newData;
      localStorage.setItem("auth", JSON.stringify(ls));
      console.log("After updating local storage:", localStorage.getItem("auth"));
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("Error updating password");
    } finally {
      setLoading(false);
    }
  }
  return (
    <Layout title="Thay đổi mật khẩu">
      <div className='bgcolor-app-gray'>
        <div className='wrapbox-content-account'>
          <div className='container-fluid max-w-screen-xl mx-auto px-2.5 pt-4 pb-2.5 pt-0 w-full block'>
            <div className='row -mr-2 -ml-2 flex flex-wrap border-box text-left'>
              <Sidebar activePage="changepassword" />
              <div className='order-2 mb-6 px-2 grow-0 shrink-0 w-4/6 relative p-0 box-border block text-left colright'>
                <div className='right-main tab-content-container h-full m-0 p-0 text-left bg-white rounded box-border block'>
                  <div class="right-main-box tab-content customers-changepassword" id="changepassword">
                    <div class="box-heading py-4 px-6 box-border block">
                      <div class="line-title">
                        <h2 className='text-2xl font-semibold mb-0'>THAY ĐỔI MẬT KHẨU</h2>
                      </div>
                    </div>
                    <div className='box-info-account py-4 px-6 box-border block'>
                      <div class="form-update max-w-xl m-0 p-0 block box-border font-medium" id="customer_update_form">
                        <div class="form__line-wrapper flex items-center mb-4 border-gray-300 pb-2">
                          <label class='w-2/6 text-right text-gray-600'>Mật khẩu hiện tại: <span class="text-red-500">*</span></label>
                          <div class="form__input-wrapper relative pl-8 w-4/6">
                            <input
                              required
                              type="text"
                              id="current_password"
                              class="form-control outline-none border rounded border-gray-300 px-4 py-2 w-full"
                              size="40"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                              <FaEye />
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                              <FaEyeSlash />
                            </div>
                          </div>
                        </div>
                        <div class="form__line-wrapper flex items-center mb-4 border-gray-300 pb-2">
                          <label class='w-2/6 text-right text-gray-600'>Mật khẩu <span class="text-red-500">*</span></label>
                          <div class="form__input-wrapper pl-8 w-4/6">
                            <input
                              required
                              type="text"
                              id="new_password"
                              class="form-control outline-none border rounded border-gray-300 px-4 py-2 w-full"
                              size="40"
                              value={newpassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="form__line-wrapper flex items-center mb-4 border-gray-300 pb-2">
                          <label class='w-2/6 text-right text-gray-600'>Mật khẩu hiện tại:<span class="text-red-500">*</span></label>
                          <div class="form__input-wrapper pl-8 w-4/6">
                            <input
                              required
                              type="text"
                              id="new_password"
                              class="form-control outline-none border rounded border-gray-300 px-4 py-2 w-full"
                              size="40"
                              value={retypePassword}
                              onChange={(e) => setRetypePassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex justify-start place-items-center">
                          <button
                            onClick={handleSubmit}
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded-md"
                          >
                            {loading ? (
                              <div role="status" className="ml-4">
                                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                              </div>
                            ) : (
                              "XÁC NHẬN"
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
      </div>
    </Layout>
  )
}

export default ChangePassword;