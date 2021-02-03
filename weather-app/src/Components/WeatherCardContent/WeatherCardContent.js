import React from 'react';
import PropTypes from 'prop-types';
import FortnightInfoList from '../FortnightInfoList/FortnightInfoList';
class WeatherCardContent extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    fortnight: PropTypes.array,
    hourly: PropTypes.array,
  }
  render() {
    const {fortnight} = this.props;
    return (
      <div className="card__content">
        <FortnightInfoList fortnight={fortnight}/>
      </div>
    );
  }
};

export default WeatherCardContent;
