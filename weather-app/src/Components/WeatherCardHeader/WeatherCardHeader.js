import React from 'react';
import WeatherInfoList from '../WeatherInfoList/WeatherInfoList';
import PropTypes from 'prop-types';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import './WeatherCardHeader.scss';

class WeatherCardHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    geoInfo: PropTypes.object,
    today: PropTypes.object,
  }

  render() {
    const {city, country_name: country} = this.props.geoInfo;
    const {temp} = this.props.today;
    return (
      <div className='card__header'>
        <div className='header__weather-info'>
          <div className='header__icon'>
            <WeatherIcon today={this.props.today}/>
          </div>
          <div className='header__weather'>
            <div className='header__temp'>
              {Math.round(temp)}
            </div>
            <div className='header__desc'>
              <h3>{'Overcast clouds'}</h3>
            </div>
          </div>
          <div className='header__location'>
            <h3 className='location__city'>{`${city}`}&nbsp;&nbsp;</h3>
            <h3 className='location__country'>{country}</h3>
          </div>
          <WeatherInfoList></WeatherInfoList>
        </div>
      </div>
    );
  }
};

export default WeatherCardHeader;
