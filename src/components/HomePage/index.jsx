import React, { Component } from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import ProductList from './ProductList'
import ConsBages from '../ConsBages'
import Category from './Category'
import Slider from './Slider'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            isLoading: true,
            selectedCategory: 'Tất cả',
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
                <div className="flex mt-2">
                    <div className="w-1/6 border-r border-gray-300 pr-4 h-1">
                        <Category />
                    </div>

                    <div className="relative w-5/6 overflow-hidden h-[23rem]">
                        <div className="flex flex-col h-full">
                            <Slider className="h-full" />
                        </div>
                    </div>
                </div>

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
