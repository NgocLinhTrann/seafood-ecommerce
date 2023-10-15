import Navigation from "../components/Navigation";
import BackgroundgImg from "../components/BackgroundgImg";
import CategoryContent from "../components/CategoryContent";
import Product from "../components/Product";
import ConsBages from "../components/ConsBages";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

function ClamOysterSnailPage() {
    return (
        <div>
            <Navigation/>
            <BackgroundgImg/>
            <CategoryContent content="NGAO, SÒ, ỐC"/>
            <Product cart={<Cart srcImg="https://product.hstatic.net/1000030244/product/chip_2559c0d025a5441d88f43eafcd52b819_1024x1024.jpg" altImg="OcChipChip image" ProductName="Ốc Chip Chip" Price="79,000đ" Unit="1kg" Num="12"/>}/>
            
            <ConsBages/>
            <Footer/>
        </div>
    )
}

export default ClamOysterSnailPage;