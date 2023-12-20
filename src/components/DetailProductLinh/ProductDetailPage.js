import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailItem from './ProductDetailItem';
import ConsBages from '../HomePage/ConsBages';
import ProductList from '../HomePage/ProductList';
import LoadingProduct from '../HomePage/LoadingProduct';
import Layout from '../Layouts/Layout';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [moreProducts, setMoreProducts] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  // Callback function to receive data from the child component
  const handleCartItemCountChange = (newItemCount) => {
    setCartItemCount(newItemCount);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://seafoodharbor.azurewebsites.net/api/product/${id}`);
      const data = await response.json();
      setProduct(data.data.productInfo);
    } catch (e) {
      console.error('Co loi xay ra: ', e);
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

  // random array
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

  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto">
        <ProductDetailItem
          product={product}
        />
        <div className="mb-10">
          <h1 className="font-bold text-gray-700 text-2xl my-5">Các sản phẩm khác</h1>
          {moreProducts.length === 0 ? <LoadingProduct /> : <ProductList products={moreProducts} productsPerPage={productsPerPage} />}
        </div>
        <ConsBages />
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
