import React, { useState, useContext } from "react";
import ProductsContext from "../../context/product";
// import ADHeader from "../../pages/AdminPages/ADHeader";

function ProductCreate(){
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [weight, setWeight] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState("");

    const {createProduct} = useContext(ProductsContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        createProduct(name, category, description, weight, price, available);
        setName("");
        setCategory("");
        setDescription("");
        setWeight("");
        setPrice("");
        setAvailable("");
    };

    return <div className="">
        <h1>Thêm sản phẩm</h1>
        <form onSubmit={handleSubmit}>
            <label>Tên sản phẩm</label>
            <input className="input" value={name} onChange={(e) => setName(e.target.value)}></input>

            <label>Loại sản phẩm</label>
            <input className="input" value={category} onChange={(e) => setCategory(e.target.value)}></input>

            <label>Mô tả sản phẩm</label>
            <input className="input" value={description} onChange={(e) => setDescription(e.target.value)}></input>

            <label>Trọng lượng</label>
            <input className="input" value={weight} onChange={(e) => setWeight(e.target.value)}></input>

            <label>Giá</label>
            <input className="input" value={price} onChange={(e) => setPrice(e.target.value)}></input>

            <label>SL Tồn</label>
            <input className="input" value={available} onChange={(e) => setAvailable(e.target.value)}></input>
            <button className="button">Create</button>
        </form>
    </div>;
}

export default ProductCreate;