import { useState, useContext, useEffect } from "react";
import ProductsContext from "../../context/product";
import ProductEdit from './ProductEdit';
import { PiTrashLight } from "react-icons/pi";


function ProductShow() {
    const { products } = useContext(ProductsContext);
    const [showEdit, setShowEdit] = useState(false);
    const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);
    const { deleteProductById } = useContext(ProductsContext);
    const [productToDelete, setProductToDelete] = useState(null);

    const confirmDelete = () => {
        if (productToDelete) {
            deleteProductById(productToDelete.id);
            setIsDeleteConfirmationVisible(false);
            setProductToDelete(null); // Reset productToDelete after deletion
        }
    };

    const cancelDelete = () => {
        setIsDeleteConfirmationVisible(false);
        setProductToDelete(null); // Reset productToDelete if cancel is clicked
    };

    const handleDeleteClick = (product) => {
        setProductToDelete(product); // Set the product to be deleted
        setIsDeleteConfirmationVisible(true);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    // Define a mapping object for column name transformation
    const columnNameMapping = {
        'Mã sản phẩm': 'id',
        'Tên sản phẩm': 'name',
        'Phân loại': 'category',
        'Trọng lượng': 'weight',
        'Giá': 'price',
        'SL tồn': 'available',
    };

    const displayColumns = Object.keys(columnNameMapping)  // ['Mã sản phẩm', 'Tên sản phẩm', 'Phân loại', 'Trọng lượng', 'Giá', 'SL tồn'];

    // if (showEdit) {
    //     content = <ProductEdit onSubmit={handleSubmit} product={product} />
    // }

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
                                    {products.map((product, index) => (
                                        <tr className="border-b dark:border-neutral-500" key={index}>
                                            {displayColumns.map((col, colIndex) => (
                                                <td className="whitespace-nowrap px-6 py-4 font-medium" key={colIndex}>
                                                    <h3>{product[columnNameMapping[col]]}</h3>
                                                </td>
                                            ))}
                                            <td className="whitespace-nowrap  py-4">
                                                <a href="#" className="text-emerald-500 font-normal underline">Xem chi tiết</a>
                                            </td>
                                            <td className="whitespace-nowrap py-4">
                                                <div className="text-rose-600 underline ml-6 cursor-pointer hover:text-rose-500" onClick={() => handleDeleteClick(product)}><PiTrashLight size={24} /></div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                {isDeleteConfirmationVisible && productToDelete && (
                                    <div className="fixed inset-0 flex items-center justify-center z-50">
                                        <div className="bg-white p-8 rounded-lg shadow-md">
                                            <p className="text-lg font-semibold mb-4">Bạn có chắc muốn xóa sản phẩm không?</p>
                                            <div className="flex justify-end">
                                                <button className="text-blue-500 mr-4 cursor-pointer" onClick={cancelDelete}>
                                                    Hủy
                                                </button>
                                                <button className="text-red-500 cursor-pointer" onClick={confirmDelete}>
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductShow;