import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="text-center">
      <div className="space-y-4">
        <h4 className="text-lg font-bold">Dashboard</h4>
        <NavLink
          to="/dashboard/user/profile"
          className="block py-2 px-4 text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-300"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/infomation"
          className="block py-2 px-4 text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-300"
        >
          Thông tin cá nhân
        </NavLink>
        <NavLink
          to="/dashboard/user/address"
          className="block py-2 px-4 text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-300"
        >
          Địa chỉ
        </NavLink>
        <NavLink
          to="/dashboard/user/address"
          className="block py-2 px-4 text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-300"
        >
          Đổi mật khẩu
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="block py-2 px-4 text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-300"
        >
          Orders
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
