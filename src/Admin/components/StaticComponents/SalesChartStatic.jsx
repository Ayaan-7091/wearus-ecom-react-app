import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../../../State/Order/Action';
import { getOrders } from '../../../State/Admin/Order/Action';

const SalesChartStatic = () => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null);// Reference to store the Chart instance

  //logic to import order data 
  const {adminOrder} = useSelector(store=>store)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders())
   
  }, []);

  let col_1=0
  let col_2=0
  let col_3=0
  let col_4=0
  let col_5=0
  let col_6=0

 
 for(let order of adminOrder.orders){
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

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (myChartRef.current) {
      myChartRef.current.destroy();
    }

    // Create the new chart instance
    myChartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['jan - feb', 'mar - apr', 'may - june', 'july - aug', 'sept - oct', 'nov - dec'],
        datasets: [{
          label: 'sales',
          data: [4, 19, 14, 11, 17, 15],
          borderWidth: 1,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className='border border-2 p-4 rounded-3xl mt-8'>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
};

export default SalesChartStatic;
