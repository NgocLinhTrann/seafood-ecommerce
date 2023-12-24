import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo_seafoodharbor.png";
import { RxDashboard } from "react-icons/rx";
import {
  GoTasklist,
  GoPeople,
  GoPackage,
  GoSignOut,
} from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbDiscount2 } from "react-icons/tb";
import "../../styles/admin.css";

function Sidebar({ activePage }) {
  return (
    <div className="sidebar shadow-xl left-0 w-64 min-h-screen h-full z-50 top-0 bottom-0 fixed box-border border-solid border-gray-200 block font-normal text-sm">
      <div className="h-full">
        <div className="flex items-center justify-between px-4 py-3">
          <a
            href="/"
            class="main-logo flex shrink-0 items-center"
          >
            <img
              class="ml-1 w-8 flex-none"
              src={Logo}
              alt="image"
            />
            <span class="align-middle text-3xl ml-1.5 inline text-cyan-500 font-extrabold">
              HARBOR
            </span>
            <br />
          </a>
        </div>
        <ul className="perfect-scrollbar relative space-y-0.5 h-[calc(100vh-80px)] p-4 py-0 font-semibold">
          <li className="menu nav-item space-y-0\.5>:not([hidden])~:not([hidden])">
            <NavLink
              to="/admin/dashboard"
              className={`nav-link group mb-1 flex w-full justify-between overflow-hidden whitespace-nowrap rounded-md p-2.5 items-center ${
                activePage === "dashboard"
                  ? "bg-cyan-500 text-white"
                  : ""
              }`}
            >
              <div class="flex items-center">
                <RxDashboard size={21} />
                <span class="pl-3">Thống kê/Báo cáo</span>
              </div>
            </NavLink>
          </li>
          <li className="menu nav-item space-y-0\.5>:not([hidden])~:not([hidden])">
            <NavLink
              to="/admin/manage-product"
              className={`nav-link group mb-1 flex w-full justify-between overflow-hidden whitespace-nowrap rounded-md p-2.5 items-center ${
                activePage === "product"
                  ? "bg-cyan-500 text-white"
                  : ""
              }`}
            >
              <div class="flex items-center">
                <GoTasklist size={23} />
                <span class="pl-3">Sản phẩm</span>
              </div>
            </NavLink>
          </li>
          <li className="menu nav-item space-y-0\.5>:not([hidden])~:not([hidden])">
            <NavLink
              to="/admin/manage-product"
              className={`nav-link group mb-1 flex w-full justify-between overflow-hidden whitespace-nowrap rounded-md p-2.5 items-center ${
                activePage === "product"
                  ? "text-cyan-500"
                  : ""
              }`}
            >
              <div class="flex items-center">
                <IoIosArrowRoundForward />
                <span class="pl-3 font-normal">
                  Danh sách sản phẩm
                </span>
              </div>
            </NavLink>
          </li>
          <li className="menu nav-item space-y-0\.5>:not([hidden])~:not([hidden])">
            <NavLink
              to="/admin/add-product"
              className={`nav-link group mb-1 flex w-full justify-between overflow-hidden whitespace-nowrap rounded-md p-2.5 items-center ${
                activePage === "product add"
                  ? "text-cyan-500"
                  : ""
              }`}
            >
              <div class="flex items-center">
                <IoIosArrowRoundForward />
                <span class="pl-3 font-normal">
                  Thêm sản phẩm
                </span>
              </div>
            </NavLink>
          </li>
          <li className="menu nav-item space-y-0\.5>:not([hidden])~:not([hidden])">
            <NavLink
              to="/admin/manage-order"
              className={`nav-link group mb-1 flex w-full justify-between overflow-hidden whitespace-nowrap rounded-md p-2.5 items-center ${
                activePage === "order"
                  ? "bg-cyan-500 text-white"
                  : ""
              }`}
            >
              <div class="flex items-center">
                <GoPackage size={21} />
                <span class="pl-3">Đơn hàng</span>
              </div>
            </NavLink>
          </li>
          <li className="menu nav-item space-y-0\.5>:not([hidden])~:not([hidden])">
            <NavLink
              to="/admin/manage-discount"
              className={`nav-link group mb-1 flex w-full justify-between overflow-hidden whitespace-nowrap rounded-md p-2.5 items-center ${
                activePage === "discount"
                  ? "bg-cyan-500 text-white"
                  : ""
              }`}
            >
              <div class="flex items-center">
                <TbDiscount2 size={21} />
                <span class="pl-3">Khuyến mãi</span>
              </div>
            </NavLink>
          </li>
          <li className="menu nav-item space-y-0\.5>:not([hidden])~:not([hidden])">
            <NavLink
              to="/admin/manage-discount"
              className={`nav-link group mb-1 flex w-full justify-between overflow-hidden whitespace-nowrap rounded-md p-2.5 items-center ${
                activePage === "discount"
                  ? "text-cyan-500"
                  : ""
              }`}
            >
              <div class="flex items-center">
                <IoIosArrowRoundForward />
                <span class="pl-3 font-normal">
                  Danh sách khuyến mãi
                </span>
              </div>
            </NavLink>
          </li>
          <li className="menu nav-item space-y-0\.5>:not([hidden])~:not([hidden])">
            <NavLink
              to="/admin/add-discount"
              className={`nav-link group mb-1 flex w-full justify-between overflow-hidden whitespace-nowrap rounded-md p-2.5 items-center ${
                activePage === "discount add"
                  ? "text-cyan-500"
                  : ""
              }`}
            >
              <div class="flex items-center">
                <IoIosArrowRoundForward />
                <span class="pl-3 font-normal">
                  Thêm khuyến mãi
                </span>
              </div>
            </NavLink>
          </li>
          <li className="menu nav-item space-y-0\.5>:not([hidden])~:not([hidden])">
            <NavLink
              to="/admin/manage-customer"
              className={`nav-link group mb-1 flex w-full justify-between overflow-hidden whitespace-nowrap rounded-md p-2.5 items-center ${
                activePage === "customer"
                  ? "bg-cyan-500 text-white"
                  : ""
              }`}
            >
              <div class="flex items-center">
                <GoPeople size={19} />
                <span class="pl-3">Khách hàng</span>
              </div>
            </NavLink>
          </li>
          <li className="menu nav-item space-y-0\.5>:not([hidden])~:not([hidden])">
            <NavLink
              to="#"
              className={`nav-link group mb-1 flex w-full justify-between overflow-hidden whitespace-nowrap rounded-md p-2.5 items-center ${
                activePage === "logout"
                  ? "bg-cyan-500 text-white"
                  : ""
              }`}
            >
              <div class="flex items-center">
                <GoSignOut size={20} />
                <span class="pl-3">Đăng xuất</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
