import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherInfoList from '../WeatherInfoList/WeatherInfoList';
import './WeatherCardAside.scss';

const WeatherCardAside = (props) => {
  const {geoInfo, today} = props;
  const {city, country_name: country} = geoInfo;
  const {temp} = today;
  const [time, setTime] = useState(geoInfo.localtime_epoch*1000);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((ts) => ts+1000);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const leadingZero = (num) => {
    return num <= '9'? '0'+num : num;
  };
  return (
    <div className='card__aside'>
      <div className='aside__location'>
        <h3 className='location__city'>{`${city}`}&nbsp;&nbsp;</h3>
        <h3 className='location__country'>{country}</h3>
      </div>
      <div className='aside__weather-info'>
        <div className='aside__time'>
          {`${leadingZero(new Date(time).getHours())} :
          ${leadingZero(new Date(time).getMinutes())}`}
        </div>
        <div className='aside__date'>
          {new Date(time).toDateString()}
        </div>
        <div className='aside__icon'>
          <WeatherIcon today={today}/>
        </div>
        <div className='aside__weather'>
          <div className='aside__temp'>
            {Math.round(temp)}
          </div>
          <div className='aside__desc'>
            <h3>{'Overcast clouds'}</h3>
          </div>
        </div>
        <WeatherInfoList today={today}/>
      </div>
    </div>
  );
};

WeatherCardAside.propTypes = {
  geoInfo: PropTypes.object,
  today: PropTypes.object,
};

export default WeatherCardAside;
