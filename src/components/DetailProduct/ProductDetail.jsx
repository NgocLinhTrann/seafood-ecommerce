// ProductDetail.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import advise from '../../assets/images/tuvandathang.png'

const ProductDetail = () => {
    const { id } = useParams()

    // Giả sử bạn có một danh sách sản phẩm
    const products = [
        {
            _id: '65368774acd9108bd4072bd9',
            id: 'SP0001',
            name: 'Sò điệp tươi ngon',
            category: 'Sò điệp',
            description: 'Sò điệp tươi ngon với hương vị tuyệt vời',
            imageUrl: 'https://product.hstatic.net/1000030244/product/so_huyet_co_587441283cea427cb4c8ca78ab79c02f_grande.jpg',
            weight: '200g',
            price: '75000',
            available: '20',
            createdAt: '2023-10-23T14:47:16.034Z',
            updatedAt: '2023-10-23T14:56:02.781Z',
            __v: 0,
        },
        // Các sản phẩm khác
    ]

    // Tìm sản phẩm dựa trên productId
    const product = products.find((item) => item.id === id)

    // Kiểm tra xem sản phẩm có tồn tại hay không
    if (!product) {
        return <div>Product not found</div>
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

                    <li className="text-gray-500">{id}</li>
                </ul>
            </nav>
            <div className="flex items-center content-center my-5">
                <div className="flex-3">
                    <img className="" src={product.imageUrl} alt={product.name} />
                </div>
                <div className="flex-2">
                    <h3>{product.name}</h3>
                    <p>
                        Mã sản phẩm: <span>{product.id}</span>
                    </p>
                    <p>{product.price}</p>
                    <p>
                        Khối lượng: <span>{product.weight}</span>
                    </p>
                    <div className="flex items-center space-x-1">
                        <button className="text-gray-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                            </svg>
                        </button>

                        <input
                            className="border border-gray-300 rounded-md py-1 px-2 w-10 text-center focus:outline-none"
                            value="1" // Số lượng mặc định, bạn có thể thay đổi tùy vào logic của bạn
                        />

                        <button className="text-gray-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </div>
                    <button>Thêm vào giỏ</button>
                </div>
                <div className="flex-5">
                    <img src={advise} alt="Tư vấn đặt hàng" className="flex-1 w-full h-auto rounded-md" />
                </div>
            </div>
        </>
    )
}

export default ProductDetail
