import React from 'react';
import PropTypes from 'prop-types';
import WeatherInfoItem from '../WeatherInfoItem/WeatherInfoItem';
import './WeatherInfoList.scss';
const WeatherInfoList = (props) => {
  const {today} = props;
  const {wind_spd: windSpeed, rh: humidity} = today;
  const weatherInfo = [
    {
      name: 'Wind Speed',
      value: `${windSpeed} m/s`,
    }, {
      name: 'Humidity',
      value: `${humidity} %`,
    }];
  return (
    <ul className="weather-info__list">
      {
        weatherInfo.map((item, key) => {
          return <WeatherInfoItem key={key} weatherInfo={item}/>;
        })
      }
    </ul>
  );
};
WeatherInfoList.propTypes = {
  today: PropTypes.object,
};
export default WeatherInfoList;
