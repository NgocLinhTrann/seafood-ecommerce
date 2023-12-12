import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Admin pages
import AdminPage from './pages/AdminPage';
import ManageProduct from './admin/ManageProduct';
import ManageProductSearch from './admin/ManageProductSearch';
import AddProduct from './admin/AddProduct';
import ManageOrder from './admin/ManageOrder';
import ProductDetail from './admin/ProductDetail';
import ManageCustomer from './admin/ManageCustomer';
// User pages
import Cart from './pages/User/Cart';
// import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage';
import DetailProduct from './components/DetailProduct';
import LogIn from './pages/Auth/LogIn';
import Register from './pages/Auth/Register';
import HomePageLinhTest from './pages/HomePageLinhTest';
// Account pages
import Account from "./pages/account";
import Addresses from "./pages/account/address";
import OrdersHistory from "./pages/account/orders_history";
import ChangePassword from './pages/account/change_password';
// Infomation and more pages
import Instruction from './pages/Info/Instruction';
import Support from './pages/Info/Support';
import About from './pages/Info/About';
import PageNotFound from './pages/PageNotFound';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/product/:id" element={<DetailProduct />} />
                <Route path="/cart" element={<Cart />} />

                {/* Admin */}
                <Route path="/admin-page" element={<AdminPage />} />
                <Route path="/ad-manage-product" element={<ManageProduct />} />
                <Route path="/ad-manage-product/search" element={<ManageProductSearch />} />
                <Route path="/ad-add-product" element={<AddProduct />} />
                <Route path="/ad-manage-order" element={<ManageOrder />} />
                <Route path="/ad-manage-customer" element={<ManageCustomer />} />
                {/* <Route path="/ad-product-detail" element={<ProductDetail />} /> */}
                <Route path="/ad-product-detail/:productId" element={<ProductDetail />} />

                {/* Account pages */}
                <Route path="/account" element={<Account />} />
                <Route path="/account/addresses" element={<Addresses />} />
                <Route path="/account/orders-history" element={<OrdersHistory />} />
                <Route path="/account/change-password" element={<ChangePassword />} />
                <Route path="/" element={<HomePageLinhTest />} />

                {/* More pages */}
                <Route path="/instruction" element={<Instruction />} />
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<Support />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App
