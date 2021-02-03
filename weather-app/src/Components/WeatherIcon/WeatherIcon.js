import React from 'react';
import PropTypes from 'prop-types';

class WeatherIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    today: PropTypes.object,
  }
  iconQuery = (code) => {
    const regList = [
      /2[0-9]{2}/,
      /5[0-9]{2}/,
      /6[0-9]{2}/,
    ];
    const name = [
      'stormy', 'rainy', 'snowy',
    ];
    let result = 'cloudy';
    if (code==='800') {
      if (this.props.today.weather.icon[3]=='d') {
        return 'sunny';
      } else {
        return 'starry';
      }
    }
    regList.map((value, key) => {
      if (code.match(value)) {
        result = name[key];
      }
    });
    return result;
  }
  render() {
    const {weather} = this.props.today;
    return (
      <div
        className={this.iconQuery(weather.code.toString())}
        type='icon'>
      </div>
    );
  }
};

export default WeatherIcon;
