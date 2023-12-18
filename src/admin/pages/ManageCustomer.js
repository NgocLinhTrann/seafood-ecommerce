import React, { useContext, useEffect } from "react";
import CustomersContext from "../../context/customer";
import Layout from "../components/Layout";

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
        <Layout title="Quản lý khách hàng" activePage="customer">
            <div className="flex justify-start">
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
        </Layout>
    )
}

export default ManageCustomer;