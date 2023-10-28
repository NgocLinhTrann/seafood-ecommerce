import React, { useState, useContext } from "react";
import ProductsContext from "../../context/product";
import axios from "axios";
import FormData from "form-data";
import { type } from "@testing-library/user-event/dist/type";


function ProductCreate() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [description, setDescription] = useState("");
    const [weight, setWeight] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState("");

    const handleImageChange = (event) => {
        const selectedImage = event.target.files && event.target.files[0];
        setImageUrl(URL.createObjectURL(selectedImage));
        if (selectedImage) {
            setImage(selectedImage);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        console.log(name);
        console.log(category);
        console.log(description);
        console.log(weight);
        console.log(price);
        console.log(available);
        console.log(image);

        // Create a FormData object to send the data as form data
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('weight', weight);
        formData.append('price', price);
        formData.append('available', available);
        formData.append('image', image); // Assuming image is a file object, not a URL

        var config = {
            method: 'post',
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


        // try {
        //     // Make a POST request to create the product
        //     const response = await axios.post("https://daohaisan.azurewebsites.net/api/product", formData, {
        //         headers: {
        //             "Content-Type": "multipart/form-data",
        //         },
        //     });
        //     console.log("linh 1" + available);

        //     // Handle the response, e.g., show a success message or redirect the user
        //     console.log("Product created successfully:", response.data);
        //     console.log("linh 2" + available);

        // } catch (error) {
        //     // Handle errors, e.g., show an error message to the user
        //     console.error("Error creating product:", error);
        //     console.log("linh 3" + available);

        // }
        setName("");
        setCategory("");
        setDescription("");
        setImage(null);
        setWeight("");
        setPrice("");
        setAvailable("");
    };


    return <div className="w-2/4 ml-60">
        <form className="mt-2 w-full flex-grow mb-10 px-5"
            onSubmit={handleSubmit}
        >
            <div className="container border px-5 py-5 shadow-sm">
                <div className="flex justify-center">
                    <div className="text-3xl font-bold">THÊM SẢN PHẨM</div>
                </div>

                <label className="label mt-3 font-medium">Tên sản phẩm</label>
                <input className="input" value={name} onChange={(e) => setName(e.target.value)}></input>

                <div className="field">
                    <label className="label mt-3 font-medium">Loại sản phẩm</label>
                    <div className="select">
                        <select className="input select" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option>Chọn phân loại</option>
                            <option value="Cá Hồi">Cá Hồi</option>
                            <option value="Cua, Ghẹ">Cua, Ghẹ</option>
                            <option value="Cá Các Loại">Cá Các Loại</option>
                            <option value="Ngao, Sò, Ốc">Ngao, Sò, Ốc</option>
                            <option value="Tôm Các Loại">Tôm Các Loại</option>
                            <option value="Mực Các Loại">Mực Các Loại</option>
                            <option value="Chế Biến Sẵn">Chế Biến Sẵn</option>
                            <option value="Gia Vị - Sôt">Gia Vị - Sôt</option>
                        </select>
                    </div>
                </div>

                <label className="label mt-3 font-medium">Mô tả sản phẩm</label>
                <input className="input" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <label>Hình ảnh sản phẩm</label>
                <label className="block">
                    <input
                        id="file_input"
                        type="file"
                        onChange={handleImageChange}
                        className="mx-auto ml-5 flex w-full justify-center border-yellow-400 text-sm outline-none file:mr-4 file:bg-amber-400 file:py-2 file:px-4 file:text-sm file:font-semibold"
                    />
                </label>
                {image && <img src={imageUrl} alt="Selected Product" style={{ width: "200px", height: "200px" }} />}
                <label className="label mt-3 font-medium">Trọng lượng</label>
                <input className="input" value={weight} onChange={(e) => setWeight(e.target.value)}></input>

                <label className="label mt-3 font-medium">Giá</label>
                <input className="input" value={price} onChange={(e) => setPrice(e.target.value)}></input>

                <label className="label mt-3 font-medium">Số lượng tồn</label>
                <input className="input" value={available} onChange={(e) => setAvailable(e.target.value)}></input>

                <button className="my-5 w-full py-2 text-white bg-amber-500 rounded">
                    THÊM SẢN PHẨM
                </button>
            </div>
        </form>
    </div>;
}

export default ProductCreate;