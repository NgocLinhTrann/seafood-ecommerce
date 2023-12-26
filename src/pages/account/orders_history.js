import React, { useState, useEffect } from 'react';
import '../../styles/account.css';
import Sidebar from '../../components/MyAccount/Sidebar';
import Layout from '../../components/Layouts/Layout';
import { useAuth } from '../../context/auth';
import axios from 'axios';
import API_DOMAIN from '../../config';

function OrdersHistory() {
  const [auth, setAuth] = useAuth();
  const [orderItems, setOrderItems] = useState([]);
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${API_DOMAIN}/api/orders`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            'Content-Type': 'application/json',
          },
        });
        setOrderItems(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, [auth.token]);
  return (
    <Layout title="Quản lý đơn hàng">
      <div className='bgcolor-app-gray'>
        <div className='wrapbox-content-account'>
          <div className='container-fluid max-w-screen-xl mx-auto px-2.5 pt-4 pb-2.5 pt-0 w-full block'>
            <div className='row -mr-2 -ml-2 flex flex-wrap border-box text-left'>
              <Sidebar activePage="orders-history" />
              <div className='order-2 mb-6 px-2 grow-0 shrink-0 w-3/4 relative p-0 box-border block text-left colright'>
                <div className='right-main tab-content-container h-full m-0 p-0 text-left bg-white rounded box-border block'>
                  <div class="right-main-box tab-content customers-orders-history" id="orders-history">
                    <div class="box-heading py-4 px-6 block">
                      <h2 className='text-2xl font-semibold'>Quản lý đơn hàng</h2>
                    </div>
                    <div class="box-info-account pt-4 block">
                      <div class="history-status block">
                        <div class="status-list items-center justify-between flex">
                          <a href="javascript:void(0);" class="status-item px-4 text-red-600 pt-2 w-auto text-center relative active" data-stt="all">
                            <span class="text font-semibold inline-block text-center ml-8 pb-2">TẤT CẢ</span><span class="count"></span>
                          </a>
                          <a href="javascript:void(0);" class="status-item status-item px-1 pt-2 w-auto text-center relative pb-2" data-stt="processing">
                            <span class="text font-semibold inline-block text-center">ĐANG XỬ LÝ</span><span class="count d-none"></span>
                          </a>
                          <a href="javascript:void(0);" class="status-item status-item px-1 pt-2 w-auto text-center relative pb-2" data-stt="delivering">
                            <span class="text font-semibold inline-block text-center">ĐANG GIAO HÀNG</span><span class="count d-none"></span>
                          </a>
                          <a href="javascript:void(0);" class="status-item status-item px-1 pt-2 w-auto text-center relative pb-2" data-stt="cancel">
                            <span class="text font-semibold inline-block text-center mr-8">ĐÃ GIAO HÀNG</span><span class="count d-none"></span>
                          </a>
                        </div>
                      </div>
                      <div class="history-search py-1 bgcolor-app-gray block">
                      </div>
                      <div className="history-table" data-table="all">
                        {orderItems.map((order) => (
                          <div key={order._id} className="history-table__item" data-search={`#${order.id}`} data-stt="new">
                            <div className="history-table__item-head">
                              <div className="stt-order">
                                <span>{order.status}</span>
                              </div>
                              <div className="code-order">#{order.id}</div>
                            </div>
                            <div className="history-table__item-body" data-count={order.products.length}>
                              {order.products.map((product) => (
                                <div key={product._id} className="history-table__item-line">
                                  <div className="left">
                                    <div className="img-line">
                                      <img src={product.imageUrl} alt="Product Image" />
                                      <div className="qty-line">x{product.quantity}</div>
                                    </div>
                                    <div className="info-line">
                                      <div className="name-line">{product.name}</div>
                                    </div>
                                  </div>
                                  <div className="right">
                                    <div className="text-right">
                                      <div className="price-line">{formatPrice(product.price)}</div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="history-table__item-foot">
                              <div className="total-order text-right">
                                <span className='font-medium text-emerald-500'>{order.paymentInfo.status}</span><br/>
                                <span>Hình thức thanh toán: {order.paymentInfo.method}</span><br/>
                                <span>Phí vận chuyển: {formatPrice(30000)}</span><br/>
                                <span>Tổng tiền: </span>
                                <span>{formatPrice(order.totalPrice)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OrdersHistory
