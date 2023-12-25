import React from 'react';
import Layout from '../components/Layout';
import OrderManagement from './../../admin/components/OrderManagement';

function ManageOrder() {
    return (
        <Layout title="Quản lý đơn hàng" activePage="order">
            <OrderManagement />
        </Layout>
    );
}

export default ManageOrder;
