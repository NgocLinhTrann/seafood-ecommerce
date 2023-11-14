import React, { Component } from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import Slider from './Slider'
import ProductItem from './ProductItem'
import ProductList from './ProductList'

class HomePage extends Component {
    render() {
        // const sampleProduct = {
        //     image: 'path/to/image.jpg',
        //     name: 'Sản phẩm mẫu',
        //     rating: 4,
        //     price: 20,
        // }
        return (
            <div className="max-w-[1200px] mx-auto">
                <Header />
                <Slider />
                <ProductList />
                <Footer />
            </div>
        )
    }
}

export default HomePage
