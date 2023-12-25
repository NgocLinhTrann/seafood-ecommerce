import {
    LinearProgress,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import API_DOMAIN from '../../../config';
import axios from 'axios';
import StatusManager from './StatusManager';

const OrderManagement = () => {
    const [listOrder, setListOrder] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_DOMAIN}/api/admin/orders`);
                const listData = response.data.data.orders.map((item) => {
                    const orderDetail = item.order;
                    return {
                        orderId: orderDetail.id,
                        userName: item.userName,
                        address: item.address,
                        total: orderDetail.totalPrice,
                        status: orderDetail.status,
                    };
                });
                setListOrder(listData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        console.log(listOrder);
    }, [listOrder]);

    const _formatCurrency = (amount) => {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        });

        return formatter.format(amount);
    };

    return (
        <div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {[
                            'Mã đơn hàng',
                            'Tên khách hàng',
                            'Địa chỉ',
                            'Tổng tiền',
                            'Trạng thái',
                        ].map((item, i) => (
                            <TableCell
                                variant="head"
                                size="medium"
                                sx={{ fontSize: 17, fontWeight: 'bold' }}
                                key={i}
                            >
                                {item}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loading ? (
                        <TableRow>
                            <Stack
                                sx={{
                                    mt: 1,
                                    alignContent: 'center',
                                    width: '400%',
                                    color: 'grey.500',
                                }}
                                spacing={2}
                            >
                                {Array.from({ length: 50 }, (_, index) =>
                                    index % 2 === 0 ? (
                                        <LinearProgress color="inherit" key={index} />
                                    ) : (
                                        <LinearProgress
                                            color="inherit"
                                            key={index}
                                            variant="query"
                                        />
                                    )
                                )}
                            </Stack>
                        </TableRow>
                    ) : (
                        <>
                            {listOrder.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell
                                        variant="head"
                                        size="medium"
                                        sx={{ fontSize: 17, fontWeight: 'regular' }}
                                    >
                                        {row.orderId}
                                    </TableCell>
                                    <TableCell
                                        variant="head"
                                        size="medium"
                                        sx={{ fontSize: 17, fontWeight: 'regular' }}
                                    >
                                        {row.userName}
                                    </TableCell>
                                    <TableCell
                                        variant="head"
                                        size="medium"
                                        sx={{ fontSize: 17, fontWeight: 'regular' }}
                                    >
                                        {row.address}
                                    </TableCell>
                                    <TableCell
                                        variant="head"
                                        size="medium"
                                        sx={{ fontSize: 17, fontWeight: 'regular' }}
                                    >
                                        {_formatCurrency(row.total)}
                                    </TableCell>
                                    <TableCell
                                        variant="head"
                                        size="medium"
                                        sx={{ fontSize: 17, fontWeight: 'regular' }}
                                    >
                                        {/* {row.status} */}
                                        <StatusManager
                                            orderStatus={row.status}
                                            orderId={row.orderId}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default OrderManagement;
