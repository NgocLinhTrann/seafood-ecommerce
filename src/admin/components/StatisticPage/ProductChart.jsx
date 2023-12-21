import React from 'react';
import ReactECharts from 'echarts-for-react';

const ProductChart = ({ data }) => {
    const option = {
        title: {
            text: 'Top sản phẩm có doanh thu cao nhất',
            subtext: 'đơn vị tính (VNĐ)',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: [
            {
                type: 'category',
                data: data.map((i) => i.name),
                axisTick: {
                    alignWithLabel: true,
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
            },
        ],
        series: [
            {
                name: 'Doanh thu',
                type: 'bar',
                barWidth: '60%',
                data: data.map((i) => i.value),
            },
        ],
    };

    return <ReactECharts option={option} style={{ height: '400px' }} />;
};

export default ProductChart;
