import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import './LineChart.css'
const LineChart = ({historicalData}) => {

    const[data,setData]=useState([["Date","Prices"]]);

useEffect(()=>{

    let dataCopy =[["Date","Prices"]];
    if(historicalData.prices){
        historicalData.prices.map((item)=>{
          //  dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
          dataCopy.push([
            new Date(item[0]), //date value
            item[1]             // Price
          ]);
          
        })
        setData(dataCopy);
    }

},[historicalData])


  return (
    <div className='chart-container'>
    <Chart  
        chartType='LineChart'
        data={data}
        height='100%'
        legendToggle
        //options for bg
        options={{
  backgroundColor: 'transparent',
  hAxis: {
    textStyle: { color: '#ffffff' },
    gridlines: { color: '#3d3d5c' },
  },
  vAxis: {
    textStyle: { color: '#ffffff' },
    gridlines: { color: '#3d3d5c' },
  },
  legend: { textStyle: { color: '#ffffff' } },
  colors: ['#00eaff'], // Neon aqua line
}}

  />
  </div>
  )
}

export default LineChart
