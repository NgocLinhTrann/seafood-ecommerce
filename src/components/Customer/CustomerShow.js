import { useState, useContext } from "react";
import CustomersContext from '../../context/customer';

function CustomerShow(){
    const {customers} = useContext(CustomersContext);
    
    const columnNameMapping = {
        'Mã khách hàng': 'id',
        'Tên khách hàng': 'name',
        'Email':'weight',
        'Địa chỉ': 'category',
        'Số điện thoại': 'availble'
    };

    const displayColumns = Object.keys(columnNameMapping);

    return (
        <div>
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
                                    {customers.map((customer, index) => (
                                        <tr className="border-b dark:border-neutral-500" key={index}>
                                            {displayColumns.map((col, colIndex) => (
                                                <td className="whitespace-nowrap px-6 py-4 font-medium" key={colIndex}>
                                                    <h3>{customer[columnNameMapping[col]]}</h3>
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
    )
}

export default CustomerShow;