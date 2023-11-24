import BackgroundgImg from "../components/BackgroundgImg";
import CategoryContent from "../components/CategoryContent";
import Product from "../components/Product";
import ConsBages from "../components/ConsBages";
import Layout from "../components/Layouts/Layout";

function HomePage() {
    return (
        <Layout>
            <BackgroundgImg/>
            <CategoryContent content="BÁN CHẠY NHẤT"/>
            <Product/>
            <ConsBages/>
        </Layout>
    )
}

export default HomePage;
