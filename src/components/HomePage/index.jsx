import React, { Component } from 'react';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import ProductList from './ProductList';
import ConsBages from '../ConsBages';
import Category from './Category';
import Slider from './Slider';
import LoadingProduct from './LoadingProduct';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filteredProducts: [],
            isLoading: true,
            selectedCategory: 'Tất cả',
            userInfo: {},
        };
    }
    handleCategoryChange = (category) => {
        this.setState({ selectedCategory: category }, () => {
            this.filterProducts();
        });
    };

    filterProducts = () => {
        const { products, selectedCategory } = this.state;
        if (selectedCategory === 'Tất cả') {
            this.setState({ filteredProducts: products });
        } else {
            const filteredProducts = products.filter(
                (product) => product.category === selectedCategory
            );
            this.setState({ filteredProducts });
        }
    };

    componentDidMount() {
        this.fetchProduct();
        this.fetchUserInfo();
    }

    fetchProduct = () => {
        fetch('https://daohaisan.azurewebsites.net/api/products')
            .then((response) => response.json())
            .then((data) => {
                const { products } = data.data;
                this.setState({ products, isLoading: false }, () => {
                    this.filterProducts();
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    fetchUserInfo = () => {
        if (true) {
            this.setState({
                userInfo: {
                    id: 'dnh005',
                    name: 'Dương Ngọc Hải',
                    cart: [{}, {}, {}],
                },
            });
        }
    };
    render() {
        const { filteredProducts, isLoading, selectedCategory } = this.state;

        return (
            <>
                <Header userInfo={this.state.userInfo} />
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex mt-2">
                        <div className="w-1/6 border-r border-gray-300 pr-4 h-1">
                            <Category
                                selectedCategory={selectedCategory}
                                onCategoryChange={this.handleCategoryChange}
                            />
                        </div>
                        <div className="relative w-5/6 overflow-hidden h-[23rem]">
                            <div className="flex flex-col h-full">
                                <Slider className="h-full" />
                            </div>
                        </div>
                    </div>
                    <h3 className="my-5 text-2xl font-semibold text-gray-700 text-shadow-md">
                        {selectedCategory}
                    </h3>
                    {isLoading ? (
                        <LoadingProduct />
                    ) : (
                        <>
                            {filteredProducts.length === 0 ? (
                                <div className="bg-red-100 p-4 text-gray-500 font-bold text-base">
                                    Danh mục này chưa có sản phẩm.
                                </div>
                            ) : (
                                <ProductList
                                    userInfo={this.state.userInfo}
                                    products={filteredProducts}
                                    productsPerPage={8}
                                />
                            )}
                        </>
                    )}
                    <ConsBages />
                </div>
                <Footer />
            </>
        );
    }
}

export default HomePage;
