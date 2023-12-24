import { Button, Typography } from '@mui/material';
import CategoryChart from './CategoryChart';
import FilterDay from './FilterDay';
import ProductChart from './ProductChart';
import React, { useEffect, useState } from 'react';
import API_DOMAIN from '../../../config';
import axios from 'axios';
import html2pdf from 'html2pdf.js';

const converDateToString = (obj) => {
    return `${obj.$y}-${obj.$M + 1}-${obj.$D}`;
};
const StatisticPage = () => {
    const [chartData, setChartData] = useState({
        total: 0,
        dataCategory: [],
        dataProduct: [],
    });
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_DOMAIN}/api/admin/report`);
                console.log(response.data.data1);
                setChartData(response.data.data1);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const _handleFilterButton = () => {
        if (startDate == null || endDate == null) {
            alert('Vui lòng chọn đầy đủ ngày bắt đầu và kết thúc');
            return;
        }
        var isInvalid = false;
        if (endDate.$y < startDate.$y) isInvalid = true;
        else if (endDate.$y > startDate.$y) isInvalid = false;
        else if (endDate.$M < startDate.$M) isInvalid = true;
        else if (endDate.$M > startDate.$M) isInvalid = false;
        else if (endDate.$D < startDate.$D) isInvalid = true;

        if (isInvalid) {
            alert('Ngày kết thúc không được nhỏ hơn ngày bắt đầu');
            return;
        }

        axios
            .get(
                `${API_DOMAIN}/api/admin/report?startDate=${converDateToString(
                    startDate
                )}&endDate=${converDateToString(endDate)}`
            )
            .then((response) => {
                setChartData(response.data.data1);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const _formatCurrency = (amount) => {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        });

        return formatter.format(amount);
    };
    const _exportToPDF = () => {
        const element = document.getElementById('report-content');
        const contentRect = element.getBoundingClientRect();

        html2pdf(element, {
            filename: 'report.pdf',
            margin: 10,
            jsPDF: {
                unit: 'mm',
                format: [500, 600], // [width, height] với đơn vị là mm

                orientation: 'portrait',
            },
        });
    };
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                paddingRight: '100px',
            }}
        >
            <div id="report-content">
                <FilterDay
                    startDate={startDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                    endDate={endDate}
                    handleFilterButton={_handleFilterButton}
                />
                <Typography
                    variant="h6"
                    sx={{
                        marginTop: '10px',
                        backgroundColor: '#27ae60',
                        color: '#fff',
                        padding: '10px',
                        borderRadius: '5px',
                        textAlign: 'center',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s ease-in-out, opacity 0.3s ease-in-out',
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: '#2ecc71',
                            opacity: 0.8,
                        },
                    }}
                >
                    Tổng doanh thu: {_formatCurrency(chartData.total)}
                </Typography>
                <CategoryChart data={chartData.dataCategory} />
                <ProductChart data={chartData.dataProduct} />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '30px',
                }}
            >
                <Button variant="contained" onClick={_exportToPDF}>
                    Xuất báo cáo
                </Button>
            </div>
        </div>
    );
};

export default StatisticPage;
