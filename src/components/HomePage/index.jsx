import React, { Component } from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import ProductList from './ProductList'
import ConsBages from '../ConsBages'
import Category from './Category'
import Slider from './Slider'
import LoadingProduct from './LoadingProduct'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            filteredProducts: [],
            isLoading: true,
            selectedCategory: 'Tất cả',
        }
    }
    handleCategoryChange = (category) => {
        this.setState({ selectedCategory: category }, () => {
            this.filterProducts()
        })
    }

    filterProducts = () => {
        const { products, selectedCategory } = this.state
        if (selectedCategory === 'Tất cả') {
            this.setState({ filteredProducts: products })
        } else {
            const filteredProducts = products.filter((product) => product.category === selectedCategory)
            this.setState({ filteredProducts })
        }
    }

    componentDidMount() {
        fetch('https://daohaisan.azurewebsites.net/api/products')
            .then((response) => response.json())
            .then((data) => {
                const { products } = data.data
                this.setState({ products, isLoading: false }, () => {
                    this.filterProducts()
                })
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }
    render() {
        const { filteredProducts, isLoading, selectedCategory } = this.state

        return (
            <div className="max-w-[1200px] mx-auto">
                <Header />
                <div className="flex mt-2">
                    <div className="w-1/6 border-r border-gray-300 pr-4 h-1">
                        <Category selectedCategory={selectedCategory} onCategoryChange={this.handleCategoryChange} />
                    </div>

                    <div className="relative w-5/6 overflow-hidden h-[23rem]">
                        <div className="flex flex-col h-full">
                            <Slider className="h-full" />
                        </div>
                    </div>
                </div>
                <h3 className="my-5 text-2xl font-semibold text-gray-700 text-shadow-md">{selectedCategory}</h3>
                {isLoading ? (
                    <LoadingProduct />
                ) : (
                    <>
                        <ProductList products={filteredProducts} />
                    </>
                )}
                <ConsBages />
                <Footer />
            </div>
        )
    }
}

export default HomePage
