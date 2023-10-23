import { useState, useContext } from "react";
import ProductsContext from "../../context/product";

function ProductEdit({product, onSubmit}) {
    const [productname, setProductname] = useState(product.productname);
    const [category, setCategory] = useState(product.category);
    const [weight, setWeight] = useState(product.weight);
    const [price, setPrice] = useState(product.price);
    const [stock, setStock] = useState(product.stock);

    const {editProductById} = useContext(ProductsContext);

    const handleChange = (event) => {
        setProductname(event.target.value);
        setCategory(event.target.value);
        setWeight(event.target.value);
        setPrice(event.target.value);
        setStock(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editProductById(product.id, productname, category, weight, price, stock);
    };

    return <form onSubmit={handleSubmit} className="">
        <label>Product Name</label>
        <input className="input" value={productname} onChange={handleChange}></input>
        <buton className="button is-primary">Save</buton>
    </form>;
}

export default ProductEdit;