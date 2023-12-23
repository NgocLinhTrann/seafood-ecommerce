import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ConsBages from '../HomePage/ConsBages';
import ProductList from '../HomePage/ProductList';
import LoadingProduct from '../HomePage/LoadingProduct';
import advise from '../../assets/images/tuvandathang.png';
import SkeletonItem from '../HomePage/SkeletonItem';
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from '../../context/auth';
import HeaderLinh from '../Layouts/HeaderLinh';
import Footer from '../Layouts/Footer';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [moreProducts, setMoreProducts] = useState([]);
  const [auth, setAuth] = useAuth();
  const [count, setCount] = useState(1);
  const [cartItemCount, setCartItemCount] = useState(0);
  const fetchData = async () => {
    try {
      const response = await fetch(`https://seafoodharbor.azurewebsites.net/api/product/${id}`);
      const data = await response.json();
      setProduct(data.data.productInfo);
    } catch (e) {
      console.error('Có lỗi xảy ra: ', e);
    }
  };
  const fetchMoreProducts = async () => {
    try {
      const response = await fetch('https://seafoodharbor.azurewebsites.net/api/products');
      const data = await response.json();
      setMoreProducts(data.data.products.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error fetching more products:', error);
    }
  };
  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  useEffect(() => {
    fetchData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMoreProducts([]);
    setTimeout(() => {
      fetchMoreProducts();
      shuffleArray(moreProducts);
    }, 1000);
  }, [id]);
  const productsPerPage = 4;

  useEffect(() => {
    const itemCount = auth.user?.cart?.items?.length || 0;
    setCartItemCount(itemCount);
  }, [auth.user]);

  const handleIncreaseCount = () => {
    if (count < product.available) setCount((prev) => prev + 1);
  };
  const handleDecreaseCount = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };
  const resetCount = () => {
    setCount(1);
  };
  useEffect(() => {
    resetCount();
  }, [product]);
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };
  // if (Object.keys(product).length === 0) {
  //   return (
  //     <>
  //       <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
  //         <ul className="flex items-center">
  //           <NavLink
  //             to="/">
  //             <FaHome size={21} />
  //           </NavLink>
  //           <li>
  //             <span className="mx-2 text-gray-500">&gt;</span>
  //           </li>
  //           <li className="text-gray-300">loading...</li>
  //         </ul>
  //       </nav>
  //       <div className="flex gap-32">
  //         <SkeletonItem />
  //         <SkeletonItem />
  //         <SkeletonItem />
  //       </div>
  //     </>
  //   );
  // }
  const handleClickBuy = async () => {
    try {
      const data = {
        productId: product.id,
        quantity: count
      };
      const response = await axios.post(
        "https://seafoodharbor.azurewebsites.net/api/user/addCartItem",
        data,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      auth.user.cart = response.data.data.cart;
      localStorage.setItem('auth', JSON.stringify(auth));
      setAuth(auth);
      setCartItemCount(response.data.data.cart.items.length);
      toast.success(response.data.message);
      toast.success('Thêm vào giỏ hàng thành công');
      resetCount();
    } catch (error) {
      console.error("Error adding item to cart", error);
      toast.error("Không thể thêm sản phẩm vào giỏ hàng");
    }
  };

  console.log("cartItemCount ", cartItemCount);
  console.log("Số lượng cần mua", count);
  return (
    <div>
      <HeaderLinh />
      <div className="max-w-[1200px] mx-auto">
        <div>
          <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
            <ul className="flex items-center">
              <NavLink
                to="/">
                <FaHome size={21} />
              </NavLink>
              <li>
                <span className="mx-2 text-gray-500">&gt;</span>
              </li>
              <li className="text-gray-500">{product.name}</li>
            </ul>
          </nav>
          <div className="flex my-5">
            <div className="basis-2/5 p-10 border rounded-md overflow-hidden">
              <div className="relative group">
                <img
                  className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110 cursor-zoom-in"
                  src={product.imageUrl}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="basis-2/5 p-10">
              <h3 className="text-gray-700 font-bold text-4xl py-2">{product.name}</h3>
              <p className="text-gray-700 font-bold text-xl py-2">
                Mã sản phẩm: <span className="font-normal">{product.id}</span>
              </p>
              <p className="text-gray-700 font-bold text-xl py-2">
                Hạn sử dụng: <span className="font-normal">24 tháng kể từ ngày sản xuất, bảo quản nơi khô ráo thoáng mát</span>
              </p>
              <p className="text-red-400 text-xl font-semibold py-3">{formatPrice(product.price)}</p>
              <p className="text-gray-700 font-bold text-xl py-2">
                Trọng lượng: <span className="font-normal ">{product.weight}</span>
              </p>
              <p className="text-gray-700 font-bold text-xl py-2">
                Hiện có: <span className="font-semibold text-blue-400 ml-2 ">{product.available}</span>
              </p>
              <div className="flex items-center py-2">
                <p className="text-gray-700 font-bold text-xl py-2">Số lượng: </p>
                <div className="flex items-center space-x-1 ml-5 border border-gray-300 rounded-full overflow-hidden my-2">
                  <button
                    onClick={handleDecreaseCount}
                    disabled={count === 1}
                    className="text-gray-600 focus:outline-none p-2 hover:bg-gray-200 transition duration-300 active:bg-red-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <input className="border-none rounded-full p-1 w-10 text-center focus:outline-none bg-gray-100" value={count} readOnly />
                  <button
                    onClick={handleIncreaseCount}
                    className="text-gray-600 focus:outline-none p-2 hover:bg-gray-200 transition duration-300 active:bg-red-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
              <button
                className="buy-button bg-amber-400 text-white px-4 py-2 w-full rounded-md hover:bg-yellow-300 transition duration-300 my-3 mx-auto"
                onClick={handleClickBuy}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="basis-1/5">
              <img src={advise} alt="Tư vấn đặt hàng" className="flex-1 w-full h-auto rounded-md cursor-pointer" />
            </div>
          </div>
          <div className="p-10 bg-gray-100 rounded-md">
            <h4 className="text-2xl font-bold mb-4">Mô tả sản phẩm</h4>
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
        <div className="mb-10">
          <h1 className="font-bold text-gray-700 text-2xl my-5">Các sản phẩm khác</h1>
          {moreProducts.length === 0 ? <LoadingProduct /> : <ProductList products={moreProducts} productsPerPage={productsPerPage} />}
        </div>
        <ConsBages />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;

