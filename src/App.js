// import 'bulma/css/bulma.css';
// import HomePage from "./pages/HomePage";
// import LogInPage from '../src/pages/LogInPage';
// import ManageAddress from './pages/ManageAddress';
// import UserAccount from './pages/UserAccount';
// import ChangePassword from './pages/ChangePassword';
// import MyOrderHistory from './pages/MyOrderHistory';
// import Cart from './user/Cart';
// import AdminPage from './pages/AdminPage';
// import ManageProduct from "./admin/ManageProduct";
// import ManageProductSearch from './admin/ManageProductSearch';
// import AddProduct from './admin/AddProduct';
// import ManageOrder from './admin/ManageOrder';
// import ProductDetail from './admin/ProductDetail';
// import ManageCustomer from './admin/ManageCustomer';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/login" element={<LogInPage />} />
//                 {/* My Account */}
//                 <Route path="/user-account" element={<UserAccount />} />

//                 <Route path="/manage-address" element={<ManageAddress />} />

//                 <Route path="/change-password" element={<ChangePassword />} />

//                 <Route path="/my-order-history" element={<MyOrderHistory />} />

//                 {/* Product Page */}

//                 <Route path='/cart' element={<Cart/>}/>

//                 <Route path="/admin-page" element={<AdminPage />} />

//                 {/* Admin */}
//                 <Route path="/ad-manage-product" element={<ManageProduct />} />

//                 <Route path="/ad-manage-product/search" element={<ManageProductSearch />} />

//                 <Route path="/ad-add-product" element={<AddProduct />} />

//                 <Route path="/ad-manage-order" element={<ManageOrder />} />

//                 <Route path="/ad-manage-customer" element={<ManageCustomer />} />

//                 {/* <Route path="/ad-product-detail" element={<ProductDetail />} /> */}
//                 <Route path="/ad-product-detail/:productId" element={<ProductDetail />} />
//             </Routes>
//         </Router>
//     )
// }

// export default App;

import 'bulma/css/bulma.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Auth/Register';
import LogIn from './pages/Auth/LogIn';
import UserAccount from './pages/UserAccount';
import Cart from './pages/User/Cart';
import AdminPage from './pages/AdminPage';
import Instruction from './pages/Instruction';
import About from './pages/About';
import Support from './pages/Support';
import PageNotFound from './pages/PageNotFound';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/user-account" element={<UserAccount />} />
                <Route path='/cart' element={<Cart/>}/>
                <Route path="/admin-page" element={<AdminPage />} />
                <Route path="/instruction" element={<Instruction />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/support" element={<Support />}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    );
}

export default App;