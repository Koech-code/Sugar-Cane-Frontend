import React, { Component } from 'react';
import {Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2'
import { BackgroundColor } from 'styled-icons/foundation';


ChartJs.register(
    BarElement, 
    CategoryScale, 
    LinearScale, 
    Tooltip, 
    Legend
)
function BarGraph(){
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday'],
        datasets: [
            {
                label: '369',
                data: [3,6,9],
                backgroundColor: 'blue',
                borderColor: 'black',
                borderWidth: 1,
            },
            {
                label: '483',
                data: [4,8,3],
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 2,
            }
        ]
    }

    const options = {

    }
    return (
      <div>
        <p>Chart</p>
        <Bar
        data = {data}
        options = {options}
        >

        </Bar>
      </div>
    );
}

export default BarGraph;
