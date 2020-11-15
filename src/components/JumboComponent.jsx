import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import goat from '../../src/goat.png'



const Jumbo = (props) => {
  //chart data: labels, individaul data from each state and chart colors
     const data = {
       labels: ["Free Throw Percentage", "Field Goal Percentage", "Three Point Percentage", "Points Per Game", "Rebounds Per Game", "Assists Per Game", "Blocks Per Game"],
       datasets: [
        {
          label: "Jordan",
          data: [props.jordan.data[0].ft_pct *100, props.jordan.data[0].fg_pct *100, props.jordan.data[0].fg3_pct *100, props.jordan.data[0].pts, props.jordan.data[0].reb, props.jordan.data[0].ast, props.jordan.data[0].blk ],
          fill: false,
          backgroundColor: "#0095A8",
          borderColor: "#0095A8"
        },
        {
          label: "Kobe",
          data: [props.kobe.data[0].ft_pct *100, props.kobe.data[0].fg_pct *100, props.kobe.data[0].fg3_pct *100, props.kobe.data[0].pts, props.kobe.data[0].reb, props.kobe.data[0].ast, props.kobe.data[0].blk],
          fill: false,
          backgroundColor: "#112E51",
          borderColor: "#112E51"
        },
        {
          label: "LeBron",
          data: [props.lebron.data[0].ft_pct *100, props.lebron.data[0].fg_pct *100, props.lebron.data[0].fg3_pct *100, props.lebron.data[0].pts, props.lebron.data[0].reb, props.lebron.data[0].ast, props.lebron.data[0].blk],
          fill: false,
          backgroundColor: "#FF7043",
          borderColor: "#FF7043"
        }
      ]
     }

     //chart options
     const options = {
      responsive: true,
      legend: {
        display: true,
        position: 'top'
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    }

      //state to track clicked data set and element, used to display data on click
      const [clickedDataset, setClickedDataset] = useState('')
      const [clickedElement, setClickedElement] = useState('')
      //state to toggle which chart to show
      const [toggleChart, setToggleChart] = useState(false)
    
      //get data set
      const getDatasetAtEvent = dataset => {
        if (!dataset.length) return
        const datasetIndex = dataset[0]._datasetIndex
        setClickedDataset(data.datasets[datasetIndex].label)
        
      }
    
      //get element
      const getElementAtEvent = element => {
        if (!element.length) return
        const { _datasetIndex: datasetIndex, _index: index } = element[0]
        setClickedElement(
          `${data.labels[index]} - ${data.datasets[datasetIndex].data[index]}`
        )
        window.location = '#stat';
      }

    
      
    
    return (
      <div className="jumbotron" style={{backgroundColor: '#ffffff'}}>
        <h1 className="display-4">Who is the <img src={goat} style={{width: '100px'}} alt="mean looking cartoon goat"/></h1>
        <p>You decide based on each players best statistical season</p>
          {toggleChart ? <Line data={data} getDatasetAtEvent={getDatasetAtEvent} getElementAtEvent={getElementAtEvent}/> : <Bar data={data} options={options}  getDatasetAtEvent={getDatasetAtEvent} getElementAtEvent={getElementAtEvent} /> }
          <div className='text-center' style={{marginTop: '35px'}}>
            <p style={{marginBottom: '30px'}} id="stat">{clickedDataset} : {clickedElement} </p>
            <button type="button" className="btn btn-info" onClick={() => { setToggleChart(false)}} style={{marginRight: '10px'}}>Show Bar Chart</button>
            <button type="button" className="btn btn-light" onClick={() => { setToggleChart(true)}}>Show Line Chart</button>
          </div>
      </div>
    )
  }

  export default Jumbo;