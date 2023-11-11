import { RxDashboard } from "react-icons/rx";
import { GoTasklist, GoPeople, GoPackage, GoSignOut } from "react-icons/go";
import React, { useState, useContext, useEffect } from "react";
import CustomersContext from "../context/customer";
import Avatar from '../assets/images/avatar-photo.jpg';


function ManageCustomer() {
    const { customers, fetchCustomers } = useContext(CustomersContext);
    useEffect(() => {
        fetchCustomers();
    }, []);

    const columnNameMapping = {
        'Mã khách hàng': 'id',
        'Tên khách hàng': 'fullname',
        'Email': 'email',
        'Số điện thoại': 'phone',
        'Giới tính' : 'gender',
        'Địa chỉ' : 'address'
    };

    const displayColumns = Object.keys(columnNameMapping);

    return (
        <div className="flex justify-start">
            <div className="text-white bg-cyan-500 w-2/12 absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
                <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                    <a href="/admin-page">
                        <div className='text-white text-3xl font-extrabold place-items-centerr'>
                            <span className='text-base'>SEAFOOD</span>
                            <br />
                            <div>HARBOR</div>
                        </div>
                    </a>

                    <button
                        className="block lg:hidden"
                    >
                        <svg
                            className="fill-current"
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                                fill=""
                            />
                        </svg>
                    </button>
                </div>
                <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                    <nav
                        className="mt-5 py-4 px-4 lg:mt-9 lg:px-6"
                        x-data="{selected: $persist('Dashboard')}"
                    >
                        <div>
                            <ul className="mb-6 flex flex-col gap-1.5">
                                <li>
                                    <a
                                        className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                        href="/admin-page"
                                    >
                                        <RxDashboard size={21} />
                                        Thống kê/Báo cáo
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                        href="ad-manage-product"
                                    >
                                        <GoTasklist size={23} />
                                        Sản phẩm
                                    </a>
                                    <div className="overflow-hidden">
                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-5 ml-1">
                                            <li>
                                                <a
                                                    className="group relative flex items-center gap-2.5 rounded-md px-4 font-light duration-300 ease-in-out"
                                                    href="/ad-manage-product"
                                                >Danh sách sản phẩm</a>
                                            </li>
                                            <li>
                                                <a
                                                    className="group relative flex items-center gap-2.5 rounded-md px-4 font-light duration-300 ease-in-out"
                                                    href="/ad-add-product"
                                                >Thêm sản phẩm</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li li >
                                    <a
                                        className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                        href="/ad-manage-order"
                                    >
                                        <GoPackage size={21} />

                                        Đơn hàng
                                    </a>
                                </li >
                                <li>
                                    <a
                                        className="bg-teal-600 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                        href="/ad-manage-customer"
                                    >
                                        <GoPeople size={19} />
                                        Khách hàng
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                        href="settings.html"
                                    >
                                        <GoSignOut size={20} />
                                        Đăng xuất
                                    </a>
                                </li>
                            </ul >
                        </div >
                    </nav >
                </div >
            </div >

            <div className="w-full">
                <div className="text-2xl ml-12">Danh sách khách hàng</div>
                <div className="w-11/12">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border-b font-medium dark:border-neutral-500">
                                            {displayColumns.map((col, index) => (
                                                <th scope="col" className="px-6 py-4" key={index}>
                                                    {col}
                                                </th>
                                            ))}
                                        </thead>
                                        <tbody>
                                            {customers.map((order, index) => (
                                                <tr className="border-b dark:border-neutral-500" key={index}>
                                                    {displayColumns.map((col, colIndex) => (
                                                        <td className="whitespace-nowrap px-6 py-4 font-medium" key={colIndex}>
                                                            <h3>{order[columnNameMapping[col]]}</h3>
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ManageCustomer;