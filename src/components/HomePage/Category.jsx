import React, { Component } from 'react'
import { VscMenu } from 'react-icons/vsc'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCategory: null,
        }
    }

    handleCategoryClick = (category) => {
        this.setState({ selectedCategory: category })
        // Thực hiện logic lọc sản phẩm theo category tại đây
    }

    render() {
        const { selectedCategory } = this.state

        const categories = ['Cá Các Loại', 'Cá Hồi', 'Cua, Ghẹ', 'Ngao, Sò, Ốc', 'Tôm Các Loại', 'Mực Các Loại', 'Chế Biến Sẵn', 'Gia Vị - Sốt']

        return (
            <aside className="menu create-menu border-r border-gray-300 pr-4">
                <div className="flex items-center mb-4">
                    <VscMenu className="mx-3 text-2xl" />
                    <span className="text-lg font-semibold">DANH MỤC</span>
                </div>
                <ul className="menu-list space-y-1">
                    {categories.map((category, index) => (
                        <li key={index} className="menu-item">
                            <button
                                onClick={() => this.handleCategoryClick(category)}
                                className={`relative text-left w-full menu-link text-base px-5 py-1 rounded-sm focus:outline-none ${
                                    selectedCategory === category
                                        ? 'text-white bg-blue-500 font-bold  duration-500'
                                        : 'text-gray-500 hover:text-gray-800 hover:bg-gray-300'
                                }`}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
        )
    }
}

export default Category
