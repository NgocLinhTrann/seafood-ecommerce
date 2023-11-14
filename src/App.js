import 'bulma/css/bulma.css'
import CrabPage from '../src/pages/CrabPage'
import SalmonPage from './pages/SalmonPage'
import DiscountPage from '../src/pages/DiscountPage'
import FishPage from './pages/FishPage'
import SaucePage from './pages/SaucePage'
import ReadyToEatPage from './pages/ReadyToEatPage'
import ClamOysterSnailPage from '../src/pages/ClamOysterSnailPage'
import ShrimpPage from '../src/pages/ShrimpPage'
import SquidPage from '../src/pages/SquidPage'
import SignUpPage from '../src/pages/SignUpPage'
import LogInPage from '../src/pages/LogInPage'

// import Route from '../src/components/Route';
import AccountPage from './pages/AccountPage'
import ManageAddress from './pages/ManageAddress'
import UserAccount from './pages/UserAccount'
import ChangePassword from './pages/ChangePassword'
import MyOrderHistory from './pages/MyOrderHistory'

import Cart from './user/Cart'

import AdminPage from './pages/AdminPage'
import ManageProduct from './admin/ManageProduct'
import ManageProductSearch from './admin/ManageProductSearch'
import AddProduct from './admin/AddProduct'
import ManageOrder from './admin/ManageOrder'
import ProductDetail from './admin/ProductDetail'

import ManageCustomer from './admin/ManageCustomer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/signup" element={<SignUpPage />} />

                <Route path="/login" element={<LogInPage />} />

                {/* <Route path="/account-page" element={<AccountPage />} /> */}

                {/* My Account */}
                <Route path="/user-account" element={<UserAccount />} />

                <Route path="/manage-address" element={<ManageAddress />} />

                <Route path="/change-password" element={<ChangePassword />} />

                <Route path="/my-order-history" element={<MyOrderHistory />} />

                {/* Product Page */}

                <Route path="/discount" element={<DiscountPage />} />

                <Route path="/fish" element={<FishPage />} />

                <Route path="/sauce" element={<SaucePage />} />

                <Route path="/readytoeat" element={<ReadyToEatPage />} />

                <Route path="/salmon" element={<SalmonPage />} />

                <Route path="/clam-oyster-snail" element={<ClamOysterSnailPage />} />

                <Route path="/crab" element={<CrabPage />} />

                <Route path="/shrimp" element={<ShrimpPage />} />

                <Route path="/squid" element={<SquidPage />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/admin-page" element={<AdminPage />} />

                {/* Admin */}
                <Route path="/ad-manage-product" element={<ManageProduct />} />

                <Route path="/ad-manage-product/search" element={<ManageProductSearch />} />

                <Route path="/ad-add-product" element={<AddProduct />} />

                <Route path="/ad-manage-order" element={<ManageOrder />} />

                <Route path="/ad-manage-customer" element={<ManageCustomer />} />

                {/* <Route path="/ad-product-detail" element={<ProductDetail />} /> */}
                <Route path="/ad-product-detail/:productId" element={<ProductDetail />} />
            </Routes>
        </Router>
    )
}

export default App
