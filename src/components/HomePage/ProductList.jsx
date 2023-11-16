// ProductList.js
import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'

import ProductItem from './ProductItem'

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0,
            productsPerPage: 8, // Số lượng sản phẩm trên mỗi trang
        }
    }

    handlePageChange = ({ selected }) => {
        this.setState({
            currentPage: selected,
        })
    }
    render() {
        const { products } = this.props
        const { currentPage, productsPerPage } = this.state

        const indexOfLastProduct = (currentPage + 1) * productsPerPage
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

        return (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 item items-center mt-5 mb-10">
                    {currentProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
                <ReactPaginate
                    pageCount={Math.ceil(products.length / productsPerPage)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={this.handlePageChange}
                    containerClassName="pagination flex justify-center"
                    activeClassName="bg-blue-900 text-white"
                    pageClassName="mx-2 px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer"
                    previousLabel="Previous"
                    nextLabel="Next"
                    previousClassName="mx-2 px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer"
                    nextClassName="mx-2 px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer"
                />
            </>
        )
    }
}

export default ProductList
