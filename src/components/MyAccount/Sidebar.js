import '../../styles/account.css';
import { NavLink } from "react-router-dom";
import { FaUser, FaBagShopping, FaEye } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import '../../styles/account.css';
import { useAuth } from "../../context/auth";

function Sidebar({ activePage }) {
  const [auth, setAuth] = useAuth();
  const [fullname, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    if (auth?.user) {
      const { fullname, avatarUrl } = auth.user;
      setName(fullname);
      setAvatarUrl(avatarUrl);
    }
  }, [auth?.user]);

  return (
    <div className='order-1 mb-6 px-2 grow-0 shrink-0 w-1/4 relative box-border block colleft'>
      <div className='left-sidebar h-full bg-white rounded box-border m-0 p-0 block text-sm font-normal'>
        <div className='left-sidebar__avatar relative z-0 border-b-2 border-solid border-gray-200 p-4 mb-1 flex items-center box-border text-sm font-normal'>
          <div class="icon my-auto w-12 h-12 box-border block">
            <img
              src={avatarUrl}
              alt="Current Avatar"
            >
            </img>
          </div>
          <div className="info pl-5 grow shrink basis-auto box-border block">
            <div className="customer-name font-semibold text-lg leading-6 box-border block text-left" style={{ marginBottom: 8 + 'px' }}>{fullname}</div>
            <NavLink
              to="/account/change-avatar"
              className={`text-sm w-3/4 hover:text-red-600 box-border block text-left rounded bg-slate-100 py-1 px-1 border border-2 ${activePage === "changeavatar" ? "text-red-600" : ""
                }`}
            >Cập nhật ảnh đại diện
            </NavLink>
          </div>
        </div>
        <ul class="left-sidebar__list tabbed-nav list-none pb-5 box-border block my-4 mx-0 text-sm font-normal">
          <li class="tab current box-border list-item list-none" data-tab="profile">
            <NavLink
              to="/account"
              className={`font-semibold block py-3 px-4 relative text-base box-border list-none ${activePage === "profile" ? "text-red-600" : ""
                }`}
            >
              <span class="icon w-4 text-center mr-3 box-boder">
                <FaUser />
              </span>
              <span className='box-border'>Thông tin tài khoản</span>
            </NavLink>
          </li>
          <li class="tab box-border list-item list-none" data-tab="changepassword">
            <NavLink
              to="/account/change-password"
              className={`font-semibold block py-3 px-4 relative text-base box-border list-none ${activePage === "changepassword" ? "text-red-600" : ""
                }`}
            >
              <span class="icon w-4 text-center mr-3 box-boder">
                <FaEye />
              </span>
              <span className='box-border'>Thay đổi mật khẩu</span>
            </NavLink>
          </li>

          <li class="tab box-border list-item list-none" data-tab="orders-history">
            <NavLink
              to="/account/orders-history"
              className={`font-semibold block py-3 px-4 relative text-base box-border list-none ${activePage === "orders-history" ? "text-red-600" : ""
                }`}
            >
              <span class="icon w-4 text-center mr-3 box-boder">
                <FaBagShopping />
              </span>
              <span className='box-border'>Quản lý đơn hàng</span>
            </NavLink>
          </li>
          {/* <li onClick={handleShowLogoutModal} class="last m-0 p-0 box-border list-item list-none font-semibold text-base leading-6 py-3 px-4 mb-0">
            <a className='flex items-center block mr-3 relative font-semibold text-base box-border js-btn-logout' href="javascript:void(0);">
              <span class="icon w-4 text-center mr-3 inline-block box-boder">
                <IoLogOutSharp size={21} />
              </span>
              <span className='box-border'>Đăng xuất</span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

