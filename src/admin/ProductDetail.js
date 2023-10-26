import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { GoTasklist, GoPeople, GoPackage, GoSignOut } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BsArrowLeft, BsPencilFill } from "react-icons/bs";
import { IconName } from "react-icons/ai";


function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState('');

    console.log(productId);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`https://daohaisan.azurewebsites.net/api/product/${productId}`);
                const productInfo = response.data.data.productInfo;
                setProduct(productInfo);
                setName(productInfo.name);
                setCategory(productInfo.category);
                setDescription(productInfo.description);
                setImageUrl(productInfo.imageUrl);
                setWeight(productInfo.weight);
                setPrice(productInfo.price);
                setAvailable(productInfo.available);
            } catch (error) {
                console.error('Error fetching product details: ', error);
            }
        };
        fetchProductDetail();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>
    }

    const categories = [
        "Cá Hồi",
        "Cua, Ghẹ",
        "Cá Các Loại",
        "Ngao, Sò, Ốc",
        "Tôm Các Loại",
        "Mực Các Loại",
        "Chế Biến Sẵn",
        "Gia Vị - Sôt"
    ];
    return (
        <div className="flex justify-start">
            <div className="text-white bg-cyan-500 w-2/12 absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
                <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                    <a href="/admin-page">
                        {/* <img src="./images/logo/logo.svg" alt="Logo" /> */}
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
                                        className="bg-teal-600 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                        href="ad-manage-product"
                                    >
                                        <GoTasklist size={23} />
                                        Sản phẩm
                                    </a>
                                    <div className="overflow-hidden">
                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-5 ml-1">
                                            <li>
                                                <a
                                                    className="bg-teal-400 group relative flex items-center gap-2.5 rounded-md px-4 font-light duration-300 ease-in-out"
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
                                        className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
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
            <div className="w-2/6 container p-4">
                <div className="text-2xl mb-4 flex items-center">
                    <BsArrowLeft className="mr-2" />
                    Chi tiết sản phẩm
                </div>
                <button class="flex items-center px-4 my-5 h-10 bg-amber-500 text-white rounded">
                    <BsPencilFill className="mr-2"/>
                    Sửa
                </button>
                {/* <p><strong className="text-gray-800">Mã sản phẩm:</strong> {product.id}</p>
                <h1 className="text-3xl font-bold mb-2">Tên sản phẩm: {product.name}</h1>
                <p><strong className="text-gray-800">Weight:</strong> {product.weight}</p>
                <p><strong className="text-gray-800">Price:</strong> {product.price}</p>
                <p><strong className="text-gray-800">Category:</strong> {product.category}</p>
                <p><strong className="text-gray-800">Available:</strong> {product.available}</p>
                <img className="mt-4 h-40 w-40" src={product.imageUrl} alt={product.name} />
                <p><strong className="text-gray-800">Description:</strong> {product.description}</p> */}

                <div className="flex justify-center">
                    <div className="label w-2/12 mt-3 font-medium">Mã sản phẩm:</div>
                    <div className="input w-2/6">{product.id}</div>
                </div>

                {/* <div className="flex items-center">
                    <div className="label w-2/12 mt-3 font-medium">Tên sản phẩm:</div>
                    <input className="input w-2/3" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div> */}

                <div className="flex justify-center">
                    <div className="label w-2/12 mt-3 font-medium">Tên sản phẩm:</div>
                    <input className="input w-2/6" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>



                <div className="flex justify-center">
                    <div className="label w-2/12 mt-3 font-medium">Trọng lượng:</div>
                    <input className="input w-2/6" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
                </div>

                <div className="flex justify-center">
                    <div className="label w-2/12 mt-3 font-medium">Giá:</div>
                    <input className="input w-2/6" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                </div>

                <div className="field flex justify-center">
                    <div className="label w-4/12 mr-4 mt-3 font-medium">Phân loại:</div>
                    <div className="select ml-10">
                        <select className="input select" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">{product.category}</option>
                            {categories.map((categoryOption) => (
                                <option key={categoryOption} value={categoryOption}>
                                    {categoryOption}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex justify-center">
                    <label className="label w-2/12 mt-3 font-medium">Số lượng tồn:</label>
                    <input className="input w-2/6" value={available} onChange={(e) => setAvailable(e.target.value)}></input>
                </div>

                <div className="flex justify-center">
                    <label className="label w-3/12 mr-5 mt-3 font-medium">Hình ảnh sản phẩm: </label>
                    <img className="mt-4 h-60 w-60 ml-10" src={product.imageUrl} alt={product.name} />
                </div>

                <div className="flex justify-center">
                    <label className="label w-2/12 mt-3 font-medium">Mô tả sản phẩm:</label>
                    <input className="input w-2/6 mt-3" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <button class="px-4 my-5 h-10 bg-amber-500 text-white rounded">
                    LƯU THAY ĐỔI
                </button>
            </div>
        </div>
    )
}

export default ProductDetail;