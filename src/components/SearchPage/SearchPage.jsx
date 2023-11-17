import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LoadingProduct from '../HomePage/LoadingProduct'
import ProductList from '../HomePage/ProductList'

const SearchPage = () => {
    const location = useLocation()
    const [queryValue, setQueryValue] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Gửi request API để lấy danh sách sản phẩm
                const response = await fetch(`https://daohaisan.azurewebsites.net/api/admin/products/${encodeURIComponent(queryValue)}`)
                const data = await response.json()

                // Kiểm tra nếu có sản phẩm
                if (data.length !== 0) {
                    setFilteredProducts(data.data.data.products)
                } else {
                    setFilteredProducts([])
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setIsLoading(false) // Đã nhận dữ liệu, setIsLoading(false) để ẩn loading spinner
            }
        }

        if (location) {
            const searchParams = new URLSearchParams(location.search)
            const query = searchParams.get('query')

            setQueryValue(query || '')

            // Gọi fetchData() để lấy dữ liệu khi queryValue thay đổi
            fetchData()
        }
    }, [location, queryValue])

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

                    <li className="text-gray-500">Tìm kiếm sản phẩm: "{queryValue}"</li>
                </ul>
            </nav>
            <h3 className="my-5 text-2xl font-semibold text-gray-700 text-shadow-md">Kết quả tìm kiếm</h3>
            {isLoading ? (
                <LoadingProduct />
            ) : (
                <>
                    {filteredProducts.length === 0 ? (
                        <div className="h-screen">
                            <p className="bg-red-100 p-4 text-gray-500 font-bold text-base">Không tìm thấy sản phẩm phù hợp.</p>
                        </div>
                    ) : (
                        <ProductList products={filteredProducts} productsPerPage={4} />
                    )}
                </>
            )}
        </>
    )
}

export default SearchPage
