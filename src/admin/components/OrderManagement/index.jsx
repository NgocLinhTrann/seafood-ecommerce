import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const data = [
    {
        Id: 'dnh',
        name: '10',
        address: 'KTX khu A,DHQG TPHCM',
        total: 100,
        status: 'Đang giao hàng',
    },
    { Id: 'dnh', name: '10', address: 'male', total: 100, status: 'Đang giao hàng' },
    { Id: 'dnh', name: '10', address: 'male', total: 100, status: 'Đang giao hàng' },
    { Id: 'dnh', name: '10', address: 'male', total: 100, status: 'Đang giao hàng' },
];
const OrderManagement = () => {
    return (
        <div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {['Mã đơn hàng', 'Tên khách hàng', 'Địa chỉ', 'Tổng tiền']
                            .concat(['Trạng thái'])
                            .map((item, i) => (
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
                    {data.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell
                                variant="head"
                                size="medium"
                                sx={{ fontSize: 17, fontWeight: 'regular' }}
                                key={i}
                            >
                                {row.Id}
                            </TableCell>
                            <TableCell
                                variant="head"
                                size="medium"
                                sx={{ fontSize: 17, fontWeight: 'regular' }}
                                key={i}
                            >
                                {row.name}
                            </TableCell>
                            <TableCell
                                variant="head"
                                size="medium"
                                sx={{ fontSize: 17, fontWeight: 'regular' }}
                                key={i}
                            >
                                {row.address}
                            </TableCell>
                            <TableCell
                                variant="head"
                                size="medium"
                                sx={{ fontSize: 17, fontWeight: 'regular' }}
                                key={i}
                            >
                                {row.total}
                            </TableCell>
                            <TableCell
                                variant="head"
                                size="medium"
                                sx={{ fontSize: 17, fontWeight: 'regular' }}
                                key={i}
                            >
                                {row.status}
                                <IconButton aria-label="delete">
                                    <ModeEditIcon sx={{ ml: 3 }} color="success" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default OrderManagement;
