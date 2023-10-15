import Navigation from "../components/Navigation";
import BackgroundgImg from "../components/BackgroundgImg";
import CategoryContent from "../components/CategoryContent";
import Product from "../components/Product";
import ConsBages from "../components/ConsBages";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

function ReadyToEatPage() {
    return (
        <div>
            <Navigation/>
            <BackgroundgImg/>
            <CategoryContent content="CHẾ BIẾN SẴN"/>
            <Product cart={<Cart srcImg="https://product.hstatic.net/1000030244/product/z2928332543044_21ce8814d1cf3ee216d405cb1f5ffbed9_5709d5fffad04945823acb411e51a1df_1024x1024.jpg" ProductName="Há Cảo Tôm" Price="130,000đ" Unit="500g" Num="8"/>}/>
            <ConsBages/>
            <Footer/>
        </div>
    )
}

export default ReadyToEatPage;