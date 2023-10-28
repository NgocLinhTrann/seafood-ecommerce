import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { GoTasklist, GoPeople, GoPackage, GoSignOut } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
    const navigate = useNavigate("");
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);


    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`https://daohaisan.azurewebsites.net/api/product/${productId}`);
                const productInfo = response.data.data.productInfo;
                console.log(productInfo.imageUrl);
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

    const handleEditModeToggle = () => {
        setIsEditMode(!isEditMode);
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files && event.target.files[0];
        setImageUrl(URL.createObjectURL(selectedImage));
        setImage(selectedImage);
        // if (selectedImage) {
        //     setImage(selectedImage);
        // }
        //image là file
        console.log("image:" + image);
        //image url la url của sp (firebase hoac local)
        //Minh se gui file cho BE, BE nhan dc, gui link lai thi minh moi show len duoc
        console.log("imageUrl:" + imageUrl);

    };

    const handleSaveChanges = async (event) => {
        event.preventDefault();
        console.log(productId);
        console.log(name);
        console.log(category);
        console.log(description);
        console.log(weight);
        console.log(price);
        console.log(available);

        console.log("image"+image);

        const formData = new FormData();
        formData.append('id', productId);
        formData.append('name', name);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('weight', weight);
        formData.append('price', price);
        formData.append('available', available);
        formData.append('image', image);

        var config = {
            method: 'put',
            url: 'https://daohaisan.azurewebsites.net/api/product',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
        setIsEditMode(false);
    };

    const handleBack = () => {
        navigate("/ad-manage-product")
    };

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
                <div className="text-2xl mb-4 flex items-center cursor-pointer"
                    onClick={handleBack}
                >
                    <BsArrowLeft className="mr-2" />
                    Chi tiết sản phẩm
                </div>
                <div className="ml-auto mr-80 flex items-center my-5 ml-2">
                    {isEditMode ? (
                        <button
                            className="px-4 h-10 bg-green-500 text-white rounded mr-2"
                            onClick={handleSaveChanges}
                        >
                            Lưu
                        </button>
                    ) : (
                        <button
                            className="px-4 h-10 bg-amber-500 text-white rounded mr-2"
                            onClick={handleEditModeToggle}
                        >
                            Chỉnh sửa
                        </button>
                    )}
                </div>
                <div className="flex justify-center">
                    <div className="label w-2/12 mt-3 font-medium">Mã sản phẩm:</div>
                    <div className="input w-2/6 bg-gray-100 border-gray-400 text-gray-600">{product.id}</div>
                </div>
                <div className="flex justify-center">
                    <div className="label w-2/12 mt-3 font-medium">Tên sản phẩm:</div>
                    <input className={`input w-2/6 ${isEditMode ? 'bg-white border-green-500 text-black' : 'bg-gray-100 border-gray-400 text-gray-600 cursor-auto'}`} value={name} onChange={(e) => setName(e.target.value)} readOnly={!isEditMode}></input>
                </div>
                <div className="flex justify-center">
                    <div className="label w-2/12 mt-3 font-medium">Trọng lượng:</div>
                    <input className={`input w-2/6 ${isEditMode ? 'bg-white border-green-500 text-black' : 'bg-gray-100 border-gray-400 text-gray-600 cursor-auto'}`} value={weight} onChange={(e) => setWeight(e.target.value)} readOnly={!isEditMode}></input>
                </div>
                <div className="flex justify-center">
                    <div className="label w-2/12 mt-3 font-medium">Giá:</div>
                    <input className={`input w-2/6 ${isEditMode ? 'bg-white border-green-500 text-black' : 'bg-gray-100 border-gray-400 text-gray-600 cursor-auto'}`} value={price} onChange={(e) => setPrice(e.target.value)} readOnly={!isEditMode}></input>
                </div>
                <div className="field flex justify-center">
                    <div className="label w-4/12 mr-4 mt-3 font-medium">Phân loại:</div>
                    <div className={`select ml-10
                        ${isEditMode ? 'border-green-500' : 'border-gray-400'} 
                        ${!isEditMode ? 'pointer-events-none' : ''}`}
                    >
                        <select className={`input select 
                            ${isEditMode ? 'text-black' : 'text-gray-600'}
                            ${!isEditMode ? 'cursor-not-allowed' : ''}`}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            disabled={!isEditMode}
                        >
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
                    <input className={`input w-2/6 ${isEditMode ? 'bg-white border-green-500 text-black' : 'bg-gray-100 border-gray-400 text-gray-600 cursor-auto'}`} value={available} onChange={(e) => setAvailable(e.target.value)} readOnly={!isEditMode}></input>
                </div>
                <div className="flex justify-center">
                    <label className="label w-3/12 mr-5 mt-3 font-medium">Hình ảnh sản phẩm: </label>
                    {!isEditMode && (
                        <div className="mt-3 w-2/6 px-4 rounded-md border">
                            {/* {product.imageUrl && <img src={product.imageUrl} alt="Product" style={{ width: "100%", height: "auto" }} />} */}
                            {product.imageUrl && <img src={product.imageUrl} alt="Product" style={{ width: "100%", height: "auto" }} />}
                            {/* {image && <img src={product.imageUrl} alt="Product" style={{ width: "100%", height: "auto" }} />} */}
                        </div>
                    )}
                    {isEditMode && ( // Render file input only when edit mode is on
                        <div className="mt-3 w-2/6 px-4 rounded-md border">
                            {<img src={imageUrl} alt="Selected Product" style={{ width: "400px", height: "400px" }} />}
                            <label className="block">
                                <input
                                    id="file_input"
                                    type="file"
                                    onChange={handleImageChange}
                                    className="mx-auto ml-5 flex w-full justify-center border-yellow-400 text-sm outline-none file:mr-4 file:bg-amber-400 file:py-2 file:px-4 file:text-sm file:font-semibold"
                                />
                            </label>
                        </div>
                    )}
                </div>
                {/* <img className="mt-4 h-60 w-60 ml-10" src={imageUrl} alt={product.name} />
                    {/* <label className="label w-3/12 mr-5 mt-3 font-medium">Hình ảnh sản phẩm 2: </label> */}
                {/* <input
                        type="file"
                        onChange={handleImageChange}
                        className={`${isEditMode ? 'bg-white border-green-500 text-black' : 'bg-gray-100 border-gray-400 text-gray-600 cursor-auto'}`}
                        // disabled={!isEditMode}
                    />
                    {image && <img src={URL.createObjectURL(image)} alt="Selected Product" style={{ width: "200px", height: "200px" }} />}  */}
                <div className="flex justify-center">
                    <label className="label w-2/12 mt-3 font-medium">Mô tả sản phẩm:</label>
                    <textarea rows="5" className={`mt-3 w-2/6 px-4 rounded-md focus:outline-none border ${isEditMode ? 'bg-white border-green-500 text-black' : 'bg-gray-100 border-gray-400 text-gray-600 cursor-auto'}`} value={description} onChange={(e) => setDescription(e.target.value)} readOnly={!isEditMode}></textarea>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;