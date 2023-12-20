import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const ProductList = ({ products, productsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    useEffect(() => {
        setCurrentPage(0);
    }, [products]);

    const pageCount = Math.ceil(products.length / productsPerPage);

    if (pageCount <= 1) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 item items-center mt-5 mb-10">
                {products.map((product) => (
                    <Link
                        to={`/product/${product.id}`}
                        key={product.id}
                        className="hover:shadow-md transition duration-300"
                    >
                        <ProductItem product={product} />
                    </Link>
                ))}
            </div>
        );
    }

    const indexOfLastProduct = (currentPage + 1) * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 item items-center mt-5 mb-10">
                {currentProducts.map((product) => (
                    <Link
                        to={`/product/${product.id}`}
                        key={product.id}
                        className="hover:shadow-md transition duration-300"
                    >
                        <ProductItem product={product} />
                    </Link>
                ))}
            </div>
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                onPageChange={handlePageChange}
                containerClassName="pagination flex justify-center"
                activeClassName={`bg-gray-700 text-white`}
                pageClassName="mx-2 px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer active:bg-red-300"
                previousLabel="Previous"
                nextLabel="Next"
                previousClassName="mx-2 px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer active:bg-red-300"
                nextClassName="mx-2 px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer active:bg-red-300"
            />
        </>
    );
};

export default ProductList;
