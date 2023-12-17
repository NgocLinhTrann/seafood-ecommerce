import React from "react";
import HeaderLinh from "./HeaderLinh";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author}></meta>
                <title>{title}</title>
            </Helmet>
            {/* <HeaderLinh /> */}
            <Header/>
            <main>
                <Toaster />
                {children}
            </main>
            <Footer />
        </div>
    );
}

Layout.defaultProps = {
    title: "Seafood Harbor - mua ngay!",
    description: "Uy tín tạo nên thương hiệu",
    keywords: "Hải sản, tươi sống, thơm ngon, uy tín",
    author: "Seafood Harbor"
}

export default Layout;

