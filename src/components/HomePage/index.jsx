import React, { Component } from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import Slider from './Slider'
import ProductList from './ProductList'
import ConsBages from '../ConsBages'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        fetch('https://daohaisan.azurewebsites.net/api/products')
            .then((response) => response.json())
            .then((data) => {
                const { products } = data.data
                this.setState({ products, isLoading: false })
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }
    render() {
        const { products, isLoading } = this.state

        return (
            <div className="max-w-[1200px] mx-auto">
                <Header />
                <Slider />

                {isLoading ? (
                    <div className="flex items-center justify-center h-screen">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                    </div>
                ) : (
                    <>
                        <ProductList products={products} />
                    </>
                )}

                <ConsBages />
                <Footer />
            </div>
        )
    }
}

export default HomePage
