import React from 'react';
import PropTypes from 'prop-types';
import FortnightInfoList from '../FortnightInfoList/FortnightInfoList';
import LineChart from '../LineChart/LineChart';
import './WeatherCardContent.scss';
class WeatherCardContent extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    fortnight: PropTypes.array,
    hourly: PropTypes.array,
  }
  render() {
    const {fortnight, hourly} = this.props;
    return (
      <div className="card__content">
        <FortnightInfoList fortnight={fortnight}/>
        <LineChart hourly={hourly} />
      </div>
    );
  }
};

export default WeatherCardContent;
