import React, { Component } from 'react'
import ProductDetail from './ProductDetail'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import ConsBages from '../HomePage/ConsBages'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductList from '../HomePage/ProductList'
import LoadingProduct from '../HomePage/LoadingProduct'

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
            setMoreProducts(data.data.products.filter((item) => item.id !== id))
            console.log('haha')
            console.log(moreProducts)
        } catch (error) {
            console.error('Error fetching more products:', error)
        }
    }
    // random array
    const shuffleArray = (array) => {
        const shuffled = array.slice()
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }
        return shuffled
    }

    useEffect(() => {
        fetchData()

        window.scrollTo({ top: 0, behavior: 'smooth' })

        setMoreProducts([])
        setTimeout(() => {
            fetchMoreProducts()
            shuffleArray(moreProducts)
        }, 1000)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <>
            <Header />
            <div className="max-w-[1200px] mx-auto">
                <ProductDetail product={product} />

                <div className="mb-10">
                    <h1 className="font-bold text-gray-700 text-2xl my-5">Các sản phẩm khác</h1>
                    {moreProducts.length === 0 ? <LoadingProduct /> : <ProductList products={moreProducts} productsPerPage={4} />}
                </div>
                <ConsBages />
            </div>
            <Footer />
        </>
    )
}
