import Navigation from "../components/Navigation";
import BackgroundgImg from "../components/BackgroundgImg";
import CategoryContent from "../components/CategoryContent";
import Product from "../components/Product";
import ConsBages from "../components/ConsBages";
import Footer from "../components/Footer";
import Cart from "../components/Cart";


function FishPage() {
    return (
        <div>
            <Navigation/>
            <BackgroundgImg/>
            <CategoryContent content="CÁ CÁC LOẠI"/>
            <Product cart={<Cart srcImg="https://product.hstatic.net/1000030244/product/ca_chim_bb3f3754e48445898e16a3778a12056b_grande.jpg" altImg="CaHoiCatKhoanh image" ProductName="Cá Chim Trắng Sống" Price="320,000đ" Unit="1000g" Num="12"/>}/>
            <ConsBages/>
            <Footer/>
        </div>
    )
}

export default FishPage;