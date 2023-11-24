import 'bulma/css/bulma.css'
import ManageAddress from './pages/ManageAddress'
import UserAccount from './pages/UserAccount'
import ChangePassword from './pages/ChangePassword'
import MyOrderHistory from './pages/MyOrderHistory'

import Cart from './pages/User/Cart';
import AdminPage from './pages/AdminPage'
import ManageProduct from './admin/ManageProduct'
import ManageProductSearch from './admin/ManageProductSearch'
import AddProduct from './admin/AddProduct'
import ManageOrder from './admin/ManageOrder'
import ProductDetail from './admin/ProductDetail'

import ManageCustomer from './admin/ManageCustomer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import DetailProduct from './components/DetailProduct'
import Instruction from './pages/Instruction';
import About from './pages/About';
import Support from './pages/Support';
import PageNotFound from './pages/PageNotFound';
import LogIn from './pages/Auth/LogIn';
import Register from './pages/Auth/Register';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/product/:id" element={<DetailProduct />} />
                <Route path="/user-account" element={<UserAccount />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/instruction" element={<Instruction />} />
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<Support />} />
                <Route path="*" element={<PageNotFound />} />

                {/* Admin */}
                <Route path="/admin-page" element={<AdminPage />} />
                <Route path="/ad-manage-product" element={<ManageProduct />} />
                <Route path="/ad-manage-product/search" element={<ManageProductSearch />} />
                <Route path="/ad-add-product" element={<AddProduct />} />
                <Route path="/ad-manage-order" element={<ManageOrder />} />
                <Route path="/ad-manage-customer" element={<ManageCustomer />} />
            </Routes>
        </>
    );
}

export default App
