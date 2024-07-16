import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../State/Admin/Order/Action';

const CustomerChart = () => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null); // Reference to store the Chart instance

  //logic to import order data 
  const { adminOrder } = useSelector(store => store);
  const dispatch = useDispatch();
  
  const [chartData, setChartData] = useState({
    col_1: 0,
    col_2: 0,
    col_3: 0,
    col_4: 0,
    col_5: 0,
    col_6: 0
  });

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    let col_1 = 0;
    let col_2 = 0;
    let col_3 = 0;
    let col_4 = 0;
    let col_5 = 0;
    let col_6 = 0;

    for (let order of adminOrder.orders) {
      const dateString = order.orderDate;
      const date = new Date(dateString);
      const month = date.getMonth() + 1;

      if (month === 1 || month === 2) {
        col_1 = col_1 + 1;
      } else if (month === 3 || month === 4) {
        col_2 = col_2 + 1;
      } else if (month === 5 || month === 6) {
        col_3 = col_3 + 1;
      } else if (month === 7 || month === 8) {
        col_4 = col_4 + 1;
      } else if (month === 9 || month === 10) {
        col_5 = col_5 + 1;
      } else if (month === 11 || month === 12) {
        col_6 = col_6 + 1;
      }
    }

    setChartData({ col_1, col_2, col_3, col_4, col_5, col_6 });
  }, [adminOrder.orders]);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (myChartRef.current) {
      myChartRef.current.destroy();
    }

    // Create the new chart instance
    myChartRef.current = new Chart(ctx, {
      type: 'line',
      data:{
        labels: ['jan - feb', 'mar - apr', 'may - june', 'july - aug', 'sept - oct', 'nov - dec'],
        datasets: [{
          label: 'customers',
          data: [12, 25, 35, 20, 45, 55, 75],
          fill: false,
          borderColor: 'rgb(1, 220, 75)',
          tension: 0.1
        }],
    }
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, [chartData]); // Re-run this effect whenever chartData changes

  return (
    <div className='border border-2 p-4 rounded-3xl mt-8'>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
};

export default CustomerChart;
