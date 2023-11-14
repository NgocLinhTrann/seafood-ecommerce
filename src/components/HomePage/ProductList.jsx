// ProductList.js
import React, { Component } from 'react'
import ProductItem from './ProductItem'

class ProductList extends Component {
    //   state = {
    //     products: [
    //       // Dữ liệu sản phẩm mẫu, có thể thay đổi theo nhu cầu của bạn
    //       // ...
    //     ],
    //     currentPage: 1,
    //     productsPerPage: 12,
    //   };

    //   renderProducts = () => {
    //     const { products, currentPage, productsPerPage } = this.state;
    //     const indexOfLastProduct = currentPage * productsPerPage;
    //     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    //     const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    //     return currentProducts.map((product) => (
    //       <ProductItem key={product.id} {...product} />
    //     ));
    //   };

    //   handlePageChange = (page) => {
    //     this.setState({
    //       currentPage: page,
    //     });
    //   };

    //   renderPagination = () => {
    //     const { products, currentPage, productsPerPage } = this.state;
    //     const totalPages = Math.ceil(products.length / productsPerPage);

    //     return (
    //       <div className="flex justify-center mt-4">
    //         {Array.from({ length: totalPages }).map((_, index) => (
    //           <button
    //             key={index}
    //             className={`mx-2 p-2 rounded-full ${
    //               currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
    //             }`}
    //             onClick={() => this.handlePageChange(index + 1)}
    //           >
    //             {index + 1}
    //           </button>
    //         ))}
    //       </div>
    //     );
    //   };

    render() {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 item items-center mt-10 mb-10">
                {/* {this.renderProducts()}
        {this.renderPagination()} */}

                <ProductItem />
            </div>
        )
    }
}

export default ProductList
