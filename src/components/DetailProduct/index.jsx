import React, { Component } from 'react'
import ProductDetail from './ProductDetail'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

export default class index extends Component {
    render() {
        return (
            <div className="max-w-[1200px] mx-auto">
                <Header />

                <ProductDetail />
                <Footer />
            </div>
        )
    }
}
