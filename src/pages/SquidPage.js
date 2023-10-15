import Navigation from "../components/Navigation";
import BackgroundgImg from "../components/BackgroundgImg";
import CategoryContent from "../components/CategoryContent";
import Product from "../components/Product";
import ConsBages from "../components/ConsBages";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

function SquidPage() {
    return (
        <div>
            <Navigation/>
            <BackgroundgImg/>
            <CategoryContent content="MỰC CÁC LOẠI"/>
            <Product cart={<Cart srcImg="https://product.hstatic.net/1000030244/product/muc-la_670390f1309a468786186fbcb686d74e_1024x1024.png" altImg="Muc La Mot Nang image" ProductName="Mực Lá 1 Nắng" Price="369,000đ" Unit="500g" Num="12"/>}/>
            
            <ConsBages/>
            <Footer/>
        </div>
    )
}
export default SquidPage;