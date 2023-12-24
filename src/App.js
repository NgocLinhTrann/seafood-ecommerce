import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Admin pages
import ManageProduct from './admin/pages/Product/ManageProduct';
import ManageProductSearch from './admin/pages/Product/ManageProductSearch';
import AddProduct from './admin/pages/Product/AddProduct';
import ManageOrder from './admin/pages/ManageOrder';
import ProductDetail from './admin/pages/Product/ProductDetail';
import ManageCustomer from './admin/pages/ManageCustomer';
import ManageDiscount from './admin/pages/ManageDiscount';
import Dashboard from './admin/pages/Dashboard';

// User pages
import Cart from './pages/User/Cart';
// import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage';
import DetailProduct from './components/DetailProduct';
import LogIn from './pages/Auth/LogIn';
import Register from './pages/Auth/Register';
import HomePageLinhTest from './pages/User/HomePageLinhTest';
import HomePage from './components/HomePage';

// Account pages
import Account from './pages/account';
import OrdersHistory from './pages/account/orders_history';
import ChangePassword from './pages/account/change_password';
import ChangeAvatar from './pages/account/change_avatar';

// Infomation and more pages
import Instruction from './pages/User/Instruction';
import Support from './pages/User/Support';
import About from './pages/User/About';
import PageNotFound from './pages/User/PageNotFound';

// Testt homepage
import HomePageNLinh from '../src/components/HomePageNLinh/HomePageNLinh';
import ProductDetailPage from './components/DetailProductLinh/ProductDetailPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<Cart />} />

                {/* Admin */}
                <Route path="admin/dashboard" element={<Dashboard />} />
                <Route path="admin/manage-product" element={<ManageProduct />} />
                <Route path="admin/manage-product/search" element={<ManageProductSearch />} />
                <Route path="admin/add-product" element={<AddProduct />} />
                <Route path="admin/manage-order" element={<ManageOrder />} />
                <Route path="admin/manage-customer" element={<ManageCustomer />} />
                <Route path="admin/manage-discount" element={<ManageDiscount />} />
                {/* <Route path="/ad-product-detail" element={<ProductDetail />} /> */}
                <Route path="admin/product-detail/:productId" element={<ProductDetail />} />

                {/* Account pages */}
                <Route path="/account" element={<Account />} />
                <Route path="/account/orders-history" element={<OrdersHistory />} />
                <Route path="/account/change-password" element={<ChangePassword />} />
                <Route path="/account/change-avatar" element={<ChangeAvatar />} />
                <Route path="/" element={<HomePageNLinh />} />

                {/* More pages */}
                <Route path="/instruction" element={<Instruction />} />
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<Support />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default App;
