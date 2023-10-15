import Navigation from "../components/Navigation";
import BackgroundgImg from "../components/BackgroundgImg";
import CategoryContent from "../components/CategoryContent";
import Product from "../components/Product";
import ConsBages from "../components/ConsBages";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

function SalmonPage() {
    return (
        <div>
           <Navigation/>
            <BackgroundgImg/>
            <CategoryContent content="CÁ HỒI"/>
            <Product cart={<Cart srcImg="https://product.hstatic.net/1000030244/product/noi_dung_doan_van_ban_cua_ban_-_2023-07-13t101148.620_85ef4593a73c4d2bb5e0a19de0bbacc7_grande.png" altImg="CaHoiCatKhoanh image" ProductName="Cá Hồi Cắt Khoanh" Price="195,000đ" Unit="500g" Num="12"/>}/>
            <ConsBages/>
            <Footer/>
        </div>
    )
}

export default SalmonPage;