import React from 'react';
import ReactECharts from 'echarts-for-react';

const CategoryChart = ({ data }) => {
    const option = {
        title: {
            text: 'Biểu đồ doanh thu theo loại sản phẩm',
            subtext: 'đơn vị tính (VNĐ)',
            left: 'center',
            // top: 'bottom',
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            orient: 'vertical',
            right: 500,
            top: 'center',
        },
        series: [
            {
                name: 'Doanh thu',
                type: 'pie',
                radius: '50%',
                data: data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        ],
    };

    return <ReactECharts option={option} style={{ height: '500px', marginTop: '50px' }} />;
};

export default CategoryChart;
