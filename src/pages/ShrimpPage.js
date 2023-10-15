import Navigation from "../components/Navigation";
import BackgroundgImg from "../components/BackgroundgImg";
import CategoryContent from "../components/CategoryContent";
import Product from "../components/Product";
import ConsBages from "../components/ConsBages";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

function ShrimpPage() {
    return (
        <div>
            <Navigation/>
            <BackgroundgImg/>
            <CategoryContent content="TÔM CÁC LOẠI"/>
            <Product cart={<Cart srcImg="https://product.hstatic.net/1000030244/product/52838801_1275120679279381_966865978065420288_o__3__4937719afdbb4b2d8df89578b456f6f8_grande.png" altImg="Tom Hum Xanh Dong Lanh image" ProductName="Tôm Hùm Xanh Đông Lạnh" Price="240,000đ" Unit="350g" Num="12"/>}/>
            <ConsBages/>
            <Footer/>
        </div>
    )
}

export default ShrimpPage;