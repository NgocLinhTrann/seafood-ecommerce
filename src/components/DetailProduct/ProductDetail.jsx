// ProductDetail.jsx
import React from 'react'

import advise from '../../assets/images/tuvandathang.png'
import SkeletonItem from '../HomePage/SkeletonItem'

const ProductDetail = (props) => {
    const { product } = props

    if (Object.keys(product).length === 0) {
        return (
            <div>
                <SkeletonItem />
            </div>
        )
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
    }

    return (
        <>
            <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
                <ul className="flex items-center">
                    <li className="cursor-pointer">
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <span className="mx-2 text-gray-500">&gt;</span>
                    </li>

                    <li className="text-gray-500">{product.id}</li>
                </ul>
            </nav>
            <div className="flex my-5">
                <div className="basis-2/5 p-10 border rounded-md overflow-hidden">
                    <div className="relative group">
                        <img
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110 cursor-zoom-in"
                            src={product.imageUrl}
                            alt={product.name}
                        />
                    </div>
                </div>
                <div className="basis-2/5 p-10">
                    <h3 className="text-gray-700 font-bold text-4xl py-2">{product.name}</h3>
                    <p className="text-gray-700 font-bold text-xl py-2">
                        Mã sản phẩm: <span className="font-normal">{product.id}</span>
                    </p>

                    <p className="text-gray-700 font-bold text-xl py-2">
                        Hạn sử dụng: <span className="font-normal">24 tháng kể từ ngày sản xuất, bảo quản nơi khô ráo thoáng mát</span>
                    </p>

                    <p className="text-red-400 text-xl font-semibold py-3">{formatPrice(product.price)}</p>
                    <p className="text-gray-700 font-bold text-xl py-2">
                        Trọng lượng: <span className="font-normal ">{product.weight}</span>
                    </p>

                    <div className="flex items-center py-2">
                        <p className="text-gray-700 font-bold text-xl py-2">Số lượng: </p>

                        <div className="flex items-center space-x-1 ml-5 border border-gray-300 rounded-full overflow-hidden my-2">
                            <button className="text-gray-600 focus:outline-none p-2 hover:bg-gray-200 transition duration-300 active:bg-red-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                </svg>
                            </button>

                            <input
                                className="border-none rounded-full p-1 w-10 text-center focus:outline-none bg-gray-100"
                                value="1" // Số lượng mặc định, bạn có thể thay đổi tùy vào logic của bạn
                            />

                            <button className="text-gray-600 focus:outline-none p-2 hover:bg-gray-200 transition duration-300 active:bg-red-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <button className="buy-button bg-amber-400 text-white px-4 py-2 w-full rounded-md hover:bg-yellow-300 transition duration-300 my-3 mx-auto">
                        Thêm vào giỏ hàng
                    </button>
                </div>
                <div className="basis-1/5">
                    <img src={advise} alt="Tư vấn đặt hàng" className="flex-1 w-full h-auto rounded-md cursor-pointer" />
                </div>
            </div>
        </>
    )
}

export default ProductDetail
