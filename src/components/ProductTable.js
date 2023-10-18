import { PiTrashLight } from "react-icons/pi";

function ProductTable() {
    return (
        <div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">Mã sản phẩm</th>
                                        <th scope="col" class="px-6 py-4">Tên sản phẩm</th>
                                        <th scope="col" class="px-6 py-4">Phân loại</th>
                                        <th scope="col" class="px-6 py-4">Trọng lượng <span>&#40;</span>gram<span>&#41;</span></th>
                                        <th scope="col" class="px-6 py-4">Giá</th>
                                        <th scope="col" class="px-6 py-4">SL tồn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b dark:border-neutral-500">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">SP0001</td>
                                        <td class="whitespace-nowrap px-6 py-4">Chân Cua Tuyết</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cua, Ghẹ</td>
                                        <td class="whitespace-nowrap px-6 py-4">500</td>
                                        <td class="whitespace-nowrap px-6 py-4">375,000đ</td>
                                        <td class="whitespace-nowrap px-6 py-4">200</td>
                                        <td class="whitespace-nowrap  py-4">
                                            <a href="#" className="text-emerald-500 font-normal underline">Xem chi tiết</a>
                                        </td>
                                        <td class="whitespace-nowrap py-4">
                                            <div className="text-rose-600 underline ml-6 cursor-pointer hover:text-rose-500"><PiTrashLight size={24}/></div>
                                        </td>
                                    </tr>
                                    <tr class="border-b dark:border-neutral-500">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">SP0002</td>
                                        <td class="whitespace-nowrap px-6 py-4">Thân Cá Hồi Phi Lê</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cá Hồi</td>
                                        <td class="whitespace-nowrap px-6 py-4">200</td>
                                        <td class="whitespace-nowrap px-6 py-4">130,000đ</td>
                                        <td class="whitespace-nowrap px-6 py-4">100</td>
                                        <td class="whitespace-nowrap  py-4">
                                            <a href="#" className="text-emerald-500 font-normal underline">Xem chi tiết</a>
                                        </td>
                                        <td class="whitespace-nowrap py-4">
                                            <div className="text-rose-600 underline ml-6 cursor-pointer hover:text-rose-500"><PiTrashLight size={24}/></div>
                                        </td>
                                    </tr>
                                    <tr class="border-b dark:border-neutral-500">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">SP0003</td>
                                        <td class="whitespace-nowrap px-6 py-4">Ốc Hương</td>
                                        <td class="whitespace-nowrap px-6 py-4">Ngao, Sò, Ốc</td>
                                        <td class="whitespace-nowrap px-6 py-4">500</td>
                                        <td class="whitespace-nowrap px-6 py-4">225,000đ</td>
                                        <td class="whitespace-nowrap px-6 py-4">210</td>
                                        <td class="whitespace-nowrap  py-4">
                                            <a href="#" className="text-emerald-500 font-normal underline">Xem chi tiết</a>
                                        </td>
                                        <td class="whitespace-nowrap py-4">
                                            <div className="text-rose-600 underline ml-6 cursor-pointer hover:text-rose-500"><PiTrashLight size={24}/></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTable;