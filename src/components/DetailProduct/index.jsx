import React, { Component } from 'react'
import ProductDetail from './ProductDetail'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import ConsBages from '../HomePage/ConsBages'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductList from '../HomePage/ProductList'

export default function Index() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [moreProducts, setMoreProducts] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch(`https://daohaisan.azurewebsites.net/api/product/${id}`)
            const data = await response.json()
            setProduct(data.data.productInfo)
            console.log(product)
        } catch (e) {
            console.error('Co loi xay ra: ', e)
        }
    }
    const fetchMoreProducts = async () => {
        try {
            const response = await fetch('https://daohaisan.azurewebsites.net/api/products')
            const data = await response.json()
            setMoreProducts(data.data.products)
            console.log('haha')
            console.log(moreProducts)
        } catch (error) {
            console.error('Error fetching more products:', error)
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        fetchMoreProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="max-w-[1200px] mx-auto">
            <Header />
            <ProductDetail product={product} />

            <div className="mb-10">
                <h1 className="font-bold text-gray-700 text-2xl my-5">Các sản phẩm khác</h1>
                {moreProducts.length === 0 ? (
                    <div className="bg-red-100 p-4 text-gray-500 font-bold text-base">Danh mục này chưa có sản phẩm.</div>
                ) : (
                    <ProductList products={moreProducts} productsPerPage={4} />
                )}
            </div>
            <ConsBages />
            <Footer />
        </div>
    )
}
