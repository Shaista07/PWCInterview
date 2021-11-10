import React from 'react';
import axios from 'axios';
import './../App.css';

class WeatherApp extends React.Component {
    constructor() {
        super();
        this.state = {
            place: '',
            searchData: [],
            loading: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        let url = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=8ff8452c821d127d7afc17c8988f6e44&q=' + this.state.place
        axios.get(url)
            .then(res => {
                this.setState({
                    searchData: res.data,
                    loading: false
                })
                console.log("res data", res.data.city.name)
            }).catch(err => {
                console.log('Error', err)
            })
    }

    render() {
        return (
            <div style={{ height: '480px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row" style={{ height: '50px' }}> </div>
                            <div className="row">
                            <div className="col-sm-1"></div>
                                <div className="col-md-5">
                                    <input type='text' style={{width: '500px'}} value={this.state.place} onChange={(event) => {
                                        this.setState({
                                            place: event.target.value
                                        })
                                    }} />
                                </div>
                                <div className="col-md-1">
                                    <button type='submit' onClick={this.handleSubmit}>Search</button>
                                </div>
                            </div>

                            <div className='row' style={{ height: '100px' }}> </div>

                            {
                                this.state.loading ? <div className='row'><div className='box'></div></div> : <div className='row'>
                                <div className='box'>
                                    <div className='row' >
                                        <div className='col-md-3'>
                                            <div style={{ fontWeight: 'bold' }}>
                                               {this.state.searchData.city.name}
                                            </div >
                                            <div>10th November 2020</div>
                                        </div>
                                        <div className='col-md-3'>

                                        </div>
                                        <div className='col-md-2'>
                                            metric unit
                                        </div>
                                        <div className='col-md-2'>

                                        </div>


                                    </div>
                                    <div className='row' style={{ height: '50px' }}></div>
                                    <div className='row'>
                                        <div className='col-sm-3'>
                                            30.37
                                        </div>
                                        <div className='col-sm-4'>

                                        </div>
                                        <div className='col-md-5' style ={{fontSize: '10px'}}>
                                            Description: Scattered clouds<br/>
                                            Humidity: 45% <br/>
                                            Wind Speed: 3.33 m/s <br/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                    </div>
                                    <div className='row'>
                                    </div>
                                    {this.state.place}
                                </div>
                            </div>
                            }
                            
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

//https://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=8ff8452c821d127d7afc17c8988f6e44&q=kolkata -- search
// https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=21.8822138&lon=87.7592251&APPID=8ff8452c821d127d7afc17c8988f6e44 --fetch

export default WeatherApp;
