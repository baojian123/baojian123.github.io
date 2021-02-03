import React from 'react';
import PropTypes from 'prop-types';
import PublicIp from 'public-ip';
import axios from 'axios';
import {baseURL} from '../../config';
import WeatherCard from '../../Components/WeatherCard/WeatherCard';
import './WeatherPage.scss';

class WeatherPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientIP: '127.0.0.1',
      geoInfo: {},
      today: [],
      fortnight: [],
      hourly: [],
    };
  }
  static propTypes={
    isLoading: PropTypes.bool,
  }
  componentDidMount() {
    this.loadGeodata();
  }
  loadGeodata = async () => {
    // get the client IP
    const resIP = await PublicIp.v4();
    this.setState({clientIP: resIP});
    const url = `${baseURL}/weather/iplookup`;
    const res = await axios.post(url, {ip: resIP});
    this.setState({geoInfo: res.data});
    this.loadToday();
    this.loadFortnight();
    this.loadHourly();
  }
  loadToday = async () => {
    const {lat, lon} = this.state.geoInfo;
    const url = `${baseURL}/weather/current`;
    const res = await axios.post(url, {lat: lat, lon: lon});
    this.setState({today: res.data.data[0]});
  }
  loadFortnight = async () => {
    const {lat, lon} = this.state.geoInfo;
    const url = `${baseURL}/weather/fortnight`;
    const res = await axios.post(url, {lat: lat, lon: lon});
    this.setState({fortnight: res.data.data});
  }
  loadHourly = async () => {
    const {lat, lon} = this. state.geoInfo;
    const url = `${baseURL}/weather/hourly`;
    const res = await axios.post(url, {lat: lat, lon: lon});
    this.setState({hourly: res.data.data});
  }
  render() {
    const {geoInfo, today, fortnight, hourly} = this.state;
    return (
      <section className='weather-page'>
        {!this.props.isLoading &&<WeatherCard
          geoInfo={geoInfo}
          today={today}
          fortnight={fortnight}
          hourly={hourly}/>}
      </section>
    );
  }
};

export default WeatherPage;
