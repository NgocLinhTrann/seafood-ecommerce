import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const StyledButton = styled(IconButton)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
}));
const StyledDay = styled(PickersDay)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    color:
        theme.palette.mode === 'light'
            ? theme.palette.secondary.dark
            : theme.palette.secondary.light,
}));

export default function FilterDay({
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    handleFilterButton,
}) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'start',
                    gap: '20px',
                    marginTop: '30px',
                    alignItems: 'center',
                }}
            >
                <DatePicker
                    label="Ngày bắt đầu"
                    slots={{
                        openPickerIcon: EditCalendarRoundedIcon,
                        openPickerButton: StyledButton,
                        day: StyledDay,
                    }}
                    slotProps={{
                        openPickerIcon: { fontSize: 'large' },
                        openPickerButton: { color: 'secondary' },
                        textField: {
                            variant: 'filled',
                            focused: true,
                            color: 'secondary',
                        },
                    }}
                    value={startDate}
                    onChange={(newValue) => {
                        setStartDate(newValue);
                    }}
                />

                <DatePicker
                    label="Ngày kết thúc"
                    slots={{
                        openPickerIcon: EditCalendarRoundedIcon,
                        openPickerButton: StyledButton,
                        day: StyledDay,
                    }}
                    slotProps={{
                        openPickerIcon: { fontSize: 'large' },
                        openPickerButton: { color: 'secondary' },
                        textField: {
                            variant: 'filled',
                            focused: true,
                            color: 'secondary',
                        },
                    }}
                    value={endDate}
                    onChange={(newValue) => {
                        setEndDate(newValue);
                    }}
                />
                <Button
                    sx={{
                        maxHeight: 40,
                    }}
                    variant="outlined"
                    startIcon={<SearchIcon />}
                    onClick={handleFilterButton}
                >
                    Tìm kiếm
                </Button>
            </div>
        </LocalizationProvider>
    );
}
