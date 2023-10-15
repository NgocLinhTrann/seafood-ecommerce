import Navigation from "../components/Navigation";
import BackgroundgImg from "../components/BackgroundgImg";
import CategoryContent from "../components/CategoryContent";
import Product from "../components/Product";
import ConsBages from "../components/ConsBages";
import Footer from "../components/Footer";

function HomePape() {
    return (
        <div>
            <Navigation/>
            <BackgroundgImg/>
            <CategoryContent content="BÁN CHẠY NHẤT"/>
            <Product/>
            <ConsBages/>
            <Footer/>
        </div>
    )
}

export default HomePape;