import React from 'react';
import PropTypes from 'prop-types';
import './FortnightInfoItem.scss';

const FortnightInfoItem = (props) => {
  const {max_temp: maxTemp, min_temp: minTemp} = props.itemInfo;
  const {weather, ts: timeEpoch} = props.itemInfo;
  const icon = require(`../../icons/${weather.icon}.png`).default;
  // time epoch should be 1000 times of timestamp
  const day = new Date(timeEpoch*1000).getDay();
  const dayAbbv = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <li className='fortnight__item'>
      <div className='fortnight__date'>
        {dayAbbv[day]}
      </div>
      <div className='fortnight__icon'>
        <img
          src={icon}
          alt={`${weather.description} icon`}
          title={`${weather.description}`}/>
      </div>
      <div className='fortnight__temp'>
        <div className='fortnight__max-temp'>{`${maxTemp}°`}</div>
        <div className='fortnight__min-temp'>{`${minTemp}°`}</div>
      </div>
    </li>
  );
};

FortnightInfoItem.propTypes = {
  itemInfo: PropTypes.object,
};

export default FortnightInfoItem;
