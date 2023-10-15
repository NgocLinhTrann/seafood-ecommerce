import Navigation from "../components/Navigation";
import BackgroundgImg from "../components/BackgroundgImg";
import CategoryContent from "../components/CategoryContent";
import Product from "../components/Product";
import ConsBages from "../components/ConsBages";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

function SaucePage() {
    return (
        <div>
            <Navigation/>
            <BackgroundgImg/>
            <CategoryContent content="GIA VỊ - SỐT"/>
            <Product cart={<Cart srcImg="https://product.hstatic.net/1000030244/product/sot-me-1_ee89edf0b1884dfcb99e3ad8efc1ec33_grande.jpg" ProductName="Sốt Me" Price="19,000đ" Unit="150g" Num="11"/>}/>
            <ConsBages/>
            <Footer/>
        </div>
    )
}

export default SaucePage;