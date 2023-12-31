import React from 'react';

const ProductItem = ({ product }) => {
    const renderStars = (rating) => {
        const stars = [];
        const maxStars = 5;

        for (let i = 0; i < maxStars; i++) {
            const starClass = i < rating ? 'text-yellow-400 text-2xl' : 'text-gray-300 text-2xl';

            stars.push(
                <span
                    key={i}
                    className={starClass}
                    role="img"
                    aria-label={i < rating ? 'star filled' : 'star empty'}
                >
                    &#9733;
                </span>
            );
        }

        return stars;
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

    const handleClick = (e) => {
        e.preventDefault();

        console.log('buy click'); // Update click handling as needed
    };

    return (
        <div className="product-item shadow-sm rounded-lg overflow-hidden text-center h-[500px] transition duration-300 transform hover:scale-105">
            <img
                className="product-image w-full h-[320px] object-cover transform hover:scale-105"
                src={product.imageUrl}
                alt={product.name}
            />
            <h2 className="product-name text-lg font-semibold my-2">{product.name}</h2>
            <div className="product-rating text-yellow-500 mb-2">{renderStars(4)}</div>
            <p className="product-price text-gray-700 font-medium">
                {formatPrice(product.price)}/ {product.weight}
            </p>
            <button
                className="buy-button bg-amber-400 text-white px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300 my-3"
                onClick={handleClick}
            >
                Mua hàng
            </button>
        </div>
    );
};

export default ProductItem;
