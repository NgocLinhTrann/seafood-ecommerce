import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { getProducts, deleteProduct } from './apiAdmin';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const handleDeleteClick = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout
      title='Manage Products'
      description='Perform CRUD on products'
      className='container-fluid'
    >
      <div className='w-11/12'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full text-left text-sm font-light'>
                <thead className='border-b font-medium dark:border-neutral-500'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>
                      Mã sản phẩm
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Tên sản phẩm
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Phân loại
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Trọng lượng (gram)
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Giá
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      SL tồn
                    </th>
                    <th scope='col' className='px-6 py-4'></th>
                    <th scope='col' className='px-6 py-4'></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className='border-b dark:border-neutral-500'>
                      <td className='whitespace-nowrap px-6 py-4 font-medium'>{product._id}</td>
                      <td className='whitespace-nowrap px-6 py-4 font-normal'>{product.name}</td>
                      <td className='whitespace-nowrap px-6 py-4 font-normal'>{product.category}</td>
                      <td className='whitespace-nowrap px-6 py-4 font-normal'>{product.weight}</td>
                      <td className='whitespace-nowrap px-6 py-4 font-normal'>{product.price}đ</td>
                      <td className='whitespace-nowrap px-6 py-4 font-normal'>{product.stock}</td>
                      <td className='whitespace-nowrap py-4'>
                        <a href='#' className='text-emerald-500 font-normal underline'>
                          Xem chi tiết
                        </a>
                      </td>
                      <td className='whitespace-nowrap py-4'>
                        <div className='text-rose-600 underline ml-6 cursor-pointer hover:text-rose-500' onClick={() => handleDeleteClick(product._id)}>
                          Xóa
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManageProducts;
