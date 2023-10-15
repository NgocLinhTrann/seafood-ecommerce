import Navigation from "../components/Navigation";
import BackgroundgImg from "../components/BackgroundgImg";
import CategoryContent from "../components/CategoryContent";
import Product from "../components/Product";
import ConsBages from "../components/ConsBages";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

function CrabPage() {
    return (
        <div>
            <Navigation/>
            <BackgroundgImg/>
            <CategoryContent content="CUA, GHẸ"/>
            <Product cart={<Cart srcImg="https://product.hstatic.net/1000030244/product/untitled-1_300a05c862a844f4895b7323d379ed37_1024x1024.png" altImg="CuaNauSong image" ProductName="Cua Nâu Sống" Price="552,000đ" Unit="800g" Num="12"/>}/>
            
            <ConsBages/>
            <Footer/>
        </div>
    )
}

export default CrabPage;