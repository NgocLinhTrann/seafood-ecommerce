import { FormControl, IconButton, MenuItem, Select } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SaveIcon from '@mui/icons-material/Save';

import { useEffect, useState } from 'react';
import axios from 'axios';
import API_DOMAIN from '../../../config';

const StatusManager = ({ orderStatus, orderId }) => {
    const [status, setStatus] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        setStatus(orderStatus);
    }, []);
    const _handleChangeStatus = (e) => {
        setStatus(e.target.value);

        const callUpdateStatusApi = async () => {
            try {
                const url = `${API_DOMAIN}/api/admin/order`;

                const data = {
                    id: orderId,
                    status: e.target.value,
                };

                await axios.put(url, data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        callUpdateStatusApi();
    };

    const isRenderSaveIcon = {
        true: <SaveIcon />,
        false: <ModeEditIcon />,
    }[isEdit];

    return (
        <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row' }}>
            {/* <InputLabel id="demo-simple-select-label">Trạng thái</InputLabel> */}
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                sx={{ minWidth: 200 }}
                // label="Trạng thái"
                onChange={_handleChangeStatus}
                disabled={isEdit ? false : true}
            >
                <MenuItem value={'Đang xử lý'}>Đang xử lý</MenuItem>
                <MenuItem value={'Đang giao hàng'}>Đang giao hàng</MenuItem>
                <MenuItem value={'Đã giao hàng'}>Đã giao hàng</MenuItem>
            </Select>
            <IconButton
                aria-label="delete"
                sx={{ ml: 5 }}
                onClick={() => {
                    setIsEdit((prev) => !prev);
                }}
            >
                {isRenderSaveIcon}
            </IconButton>
        </FormControl>
    );
};

export default StatusManager;
