import React from 'react';
import PropTypes from 'prop-types';
import WeatherCardAside from '../WeatherCardAside/WeatherCardAside';
import WeatherCardContent from '../WeatherCardContent/WeatherCardContent';
import './WeatherCard.scss';

const WeatherCard = (props) => {
  const {geoInfo, today} = props;
  const {fortnight, hourly} = props;
  return (
    <div className='weather-card'>
      <WeatherCardAside geoInfo={geoInfo} today={today}/>
      <WeatherCardContent fortnight={fortnight} hourly={hourly}/>
    </div>
  );
};
// <CardContent fortnight={fortnight} hourly={hourly}/>
WeatherCard.propTypes = {
  geoInfo: PropTypes.object,
  today: PropTypes.object,
  fortnight: PropTypes.array,
  hourly: PropTypes.array,
};

export default WeatherCard;
