import React from 'react';
import PropTypes from 'prop-types';
import './WeatherInfoItem.scss';

const WeatherInfoItem = (props) => {
  const {name, value} = props.weatherInfo;
  return (
    <li className="weather-info__item">
      <div className="weahter-info__name">{name}</div>
      <div className="weather-info__value">{value}</div>
    </li>
  );
};
WeatherInfoItem.propTypes = {
  weatherInfo: PropTypes.object,
};
export default WeatherInfoItem;
