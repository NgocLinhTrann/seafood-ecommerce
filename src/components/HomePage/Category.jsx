import React, { Component } from 'react'
import { VscMenu } from 'react-icons/vsc'

class Category extends Component {
    handleCategoryClick = (category) => {
        this.props.onCategoryChange(category)
    }

    render() {
        const { selectedCategory } = this.props

        const categories = ['Tất cả', 'Cá Các Loại', 'Tôm Các Loại', 'Mực Các Loại', 'Ngao, Sò, Ốc', 'Cua, Ghẹ', 'Gia Vị - Sốt', 'Chế Biến Sẵn']

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
                                        ? 'text-white bg-blue-500 font-bold w-full duration-500'
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
