import React from "react";
import Sidebar from "./Sidebar";
import { Helmet } from "react-helmet";
import "../../styles/admin.css";

const Layout = ({ children, title, description, keywords, author, activePage }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author}></meta>
                <title>{title}</title>
            </Helmet>
            <div className="main-container min-h-screen text-black dark:text-white-dark navbar-floating">
                <Sidebar activePage={activePage} />
                <div className="main-content flex flex-col min-h-screen ml-72">
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}

Layout.defaultProps = {
    title: "Seafood Harbor - mua ngay!",
    description: "Uy tín tạo nên thương hiệu",
    keywords: "Hải sản, tươi sống, thơm ngon, uy tín",
    author: "Seafood Harbor",
    activePage: "dashboard"
}

export default Layout;

