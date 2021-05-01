import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/ChartXY";
import AreaChart from "../charts/AreaChart";
import React from "react";


//import DatePicker from "react-datepicker";


import { transformToTemperature, transformToSoilMoisture, transformLight, transformAirHumidity } from './transformdata';

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      date: '2021-04-29',
      sensorData: [
        {
          "airHumidity": 26,
          "airTemperature": 29.6,
          "light": "95.31",
          "rainDrops": "N",
          "sensorDataId": "06d5ddfc-9e14-4aa4-872f-3b64b8bab858",
          "soilHumidity": "23.17",
          "timestamp": "2021-04-22T18:19:18Z"
        },
        {
          "airHumidity": 26,
          "airTemperature": 25.9,
          "light": "68.62",
          "rainDrops": "N",
          "sensorDataId": "09b78f0a-0ded-4533-8d41-045efe295243",
          "soilHumidity": "0.00",
          "timestamp": "2021-04-22T16:02:49Z"
        },
        {
          "airHumidity": 19,
          "airTemperature": 30.5,
          "light": "100.00",
          "rainDrops": "N",
          "sensorDataId": "0b1410be-d099-496d-9d1a-f3a8b25cf49e",
          "soilHumidity": "0.00",
          "timestamp": "2021-04-22T14:01:24Z"
        }
      ]
    }
  }

  componentDidMount() {
    console.log('Mounted');
    const apiURL = 'https://project-toolchain-iotpushtodb.mybluemix.net/consume/getSensorDatafromUser?email=erikbus2007@hotmail.com&date=2021-04-29';
    fetch(apiURL)
    .then((res) => res.json())
    .then((data) =>{
     this.setState({
       
      count: data.count,
      sensorData: data.sensorData.sort(function(x, y){
        return new Date(x.timestamp) - new Date(y.timestamp);
    })
     });
      console.log(this.state);
    })
    .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps,prevState) {
    let dateISOFormat= this.props.datePick.toISOString();
    let dateFormatString = dateISOFormat.slice(0,dateISOFormat.indexOf('T'))
    console.log(dateISOFormat + ', ' + this.state.date )
    if (dateISOFormat !== this.state.date.toString()) {
      console.log('fetching new date ...')
      const apiURL = 'https://project-toolchain-iotpushtodb.mybluemix.net/consume/getSensorDatafromUser?' + new URLSearchParams({
        date: dateFormatString,
        email: localStorage.getItem("userEmail")
    });
      console.log('update, url', apiURL)
       fetch(apiURL)
      .then((res) => res.json())
      .then((data) =>{
       this.setState({
        date: dateISOFormat,
        count: data.count,
        sensorData: data.sensorData.sort(function(x, y){
          return new Date(x.timestamp) - new Date(y.timestamp);
      })
       });
        //console.log(this.state);
      }) 
    }
  }

  
  render(){
    let countData= this.state.count;
    return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}
  
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello {localStorage.getItem("userName")} </h1>
            <p>Welcome to your farms dashboard</p>
          </div>
        </div>
  
        {/* <!-- MAIN TITLE ENDS HERE --> */}
  
        {/* <!-- MAIN CARDS STARTS HERE --> */}
{/*         <DatePicker
        selected={Date.now()}/> */}

        <div className="main__cards">
  
          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Data</p>
              <span className="font-bold text-title">{countData}</span>
            </div>
          </div>
  
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}
  
        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
{/*           <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true">2555</i>
            </div>
            <Chart />
          </div> */}
  
{/*           <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
  
            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>
  
              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>
  
              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>
  
              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        */}   <div className="charts__left">
            <div className="charts__right__title">
              <div>
                <h1>Temperature</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-calculator" aria-hidden="true"> Average: {transformToTemperature(this.state.sensorData, 'temperature')} °C</i>
            </div>
            <Chart sensorData={transformToTemperature(this.state.sensorData, 'graphData')}/>
          </div>

          <div className="charts__left">
            <div className="charts__right__title">
              <div>
                <h1>Soil Humidity</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-calculator" aria-hidden="true"> Average: {transformToSoilMoisture(this.state.sensorData, 'average')} %</i>
            </div>
            <AreaChart sensorData={transformToSoilMoisture(this.state.sensorData, 'graphData')}/>
          </div>
  
          <div className="charts__left">
            <div className="charts__right__title">
              <div>
                <h1>Light Intensity</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-calculator" aria-hidden="true"> Average: {transformLight(this.state.sensorData, 'average')} %</i>
            </div>
            <AreaChart sensorData={transformLight(this.state.sensorData, 'graphData')}/>
          </div>

          <div className="charts__left">
            <div className="charts__right__title">
              <div>
                <h1>Air Humidity</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-calculator" aria-hidden="true"> Average: {transformAirHumidity(this.state.sensorData, 'average')} %</i>
            </div>
            <AreaChart sensorData={transformAirHumidity(this.state.sensorData, 'graphData')}/>
          </div>

        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );

  }

};

export default Main;