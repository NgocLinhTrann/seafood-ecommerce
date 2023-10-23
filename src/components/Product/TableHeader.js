function TableHeader() {
    return (
        <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
                <th scope="col" className="px-6 py-4">Mã sản phẩm</th>
                <th scope="col" className="px-6 py-4">Tên sản phẩm</th>
                <th scope="col" className="px-6 py-4">Phân loại</th>
                <th scope="col" className="px-6 py-4">Trọng lượng <span>&#40;</span>gram<span>&#41;</span></th>
                <th scope="col" className="px-6 py-4">Giá</th>
                <th scope="col" className="px-6 py-4">SL tồn</th>
            </tr>
        </thead>
    );
}

export default TableHeader;
