import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

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
        console.log("image:" + image);
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
        <Layout title="Chi tiết sản phẩm" activePage="product list">
            <div className="flex justify-start">
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
                                {product.imageUrl && <img src={product.imageUrl} alt="Product" style={{ width: "100%", height: "auto" }} />}
                            </div>
                        )}
                        {isEditMode && (
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
                    <div className="flex justify-center">
                        <label className="label w-2/12 mt-3 font-medium">Mô tả sản phẩm:</label>
                        <textarea rows="5" className={`mt-3 w-2/6 px-4 rounded-md focus:outline-none border ${isEditMode ? 'bg-white border-green-500 text-black' : 'bg-gray-100 border-gray-400 text-gray-600 cursor-auto'}`} value={description} onChange={(e) => setDescription(e.target.value)} readOnly={!isEditMode}></textarea>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetail;