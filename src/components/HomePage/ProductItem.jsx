// ProductItem.js
import React, { Component } from 'react'

class ProductItem extends Component {
    renderStars = (rating) => {
        const stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(
                <span key={i} className="text-yellow-500" role="img" aria-label="star">
                    &#9733;
                </span>
            )
        }
        return stars
    }

    render() {
        return (
            <div className="product-item shadow-md rounded-lg overflow-hidden text-center ">
                {/* Ảnh sản phẩm */}
                <img
                    className="product-image"
                    src={'https://product.hstatic.net/1000030244/product/so_huyet_co_587441283cea427cb4c8ca78ab79c02f_grande.jpg'}
                    alt={'Sò điệp tươi ngon'}
                />

                {/* Tên sản phẩm */}
                <h2 className="product-name text-lg font-semibold my-2">{'Sò điệp tươi ngon'}</h2>

                {/* Đánh giá (5 ngôi sao) */}
                <div className="product-rating text-yellow-500 mb-2">{this.renderStars(5)}</div>

                {/* Giá sản phẩm/đơn vị */}
                <p className="product-price text-gray-700">
                    {75000}/ {'200g'}
                </p>

                {/* Nút mua hàng */}

                <button className="buy-button bg-amber-400 text-white px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300 my-3">
                    Mua hàng
                </button>
            </div>
        )
    }
}

export default ProductItem
