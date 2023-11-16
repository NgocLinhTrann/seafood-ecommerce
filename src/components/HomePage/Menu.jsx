import React, { Component } from 'react'
import { VscMenu } from 'react-icons/vsc'

export default class Menu extends Component {
    render() {
        return (
            <aside className="menu create-menu border-r border-gray-900 pr-4">
                <div className="flex items-center mb-2">
                    <VscMenu className="mx-3" />
                    DANH MỤC
                </div>
                <ul className="menu-list">
                    <li className="menu-item transition duration-300 ease-in-out hover:bg-red-500">
                        <p className="menu-link">Cá Các Loạiiii</p>
                    </li>
                    <li className="menu-item">
                        <p className="menu-link">Cá Hồi</p>
                    </li>
                    <li className="menu-item">
                        <a href="/crab" className="menu-link">
                            Cua, Ghẹ
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="/clam-oyster-snail" className="menu-link">
                            Ngao, Sò, Ốc
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="/shrimp" className="menu-link">
                            Tôm Các Loại
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="/squid" className="menu-link">
                            Mực Các Loại
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="/readytoeat" className="menu-link">
                            Chế Biến Sẵn
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="/sauce" className="menu-link">
                            Gia Vị - Sốt
                        </a>
                    </li>
                </ul>
            </aside>
        )
    }
}
