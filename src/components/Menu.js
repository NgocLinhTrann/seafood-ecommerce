import { VscMenu } from 'react-icons/vsc'

function Menu() {
    return (
        <aside class="menu create-menu ">
            <div className="flex items-center mb-2">
                <VscMenu className="mx-3" />
                DANH MỤC
            </div>
            <ul class="menu-list menu-item-hover-color">
                <li>
                    <a href="/">BÁN CHẠY NHẤT</a>
                </li>
                <li>
                    <a href="/discount">KHUYẾN MÃI</a>
                </li>
                <li>
                    <a href="/salmon">Cá Hồi</a>
                </li>
                <li>
                    <a href="/crab">Cua, Ghẹ</a>
                </li>
                <li>
                    <a href="/fish">Cá Các Loại</a>
                </li>
                <li>
                    <a href="/clam-oyster-snail">Ngao, Sò, Ốc</a>
                </li>
                <li>
                    <a href="/shrimp">Tôm Các Loại</a>
                </li>
                <li>
                    <a href="/squid">Mực Các Loại</a>
                </li>
                <li>
                    <a href="/readytoeat">Chế Biến Sẵn</a>
                </li>
                <li>
                    <a href="/sauce">Gia Vị - Sốt</a>
                </li>
            </ul>
        </aside>
    )
}

export default Menu
