import React, { Component } from 'react'
import ProductDetail from './ProductDetail'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import ConsBages from '../HomePage/ConsBages'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Index() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

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

    useEffect(() => {
        fetchData()
    }, [id]) // Thêm id vào dependencies để useEffect chỉ gọi lại khi id thay đổi

    return (
        <div className="max-w-[1200px] mx-auto">
            <Header />
            <ProductDetail product={product} />
            <ConsBages />
            <Footer />
        </div>
    )
}
