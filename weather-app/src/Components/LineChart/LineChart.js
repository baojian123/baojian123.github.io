/* eslint max-len: ['error', { 'code': 180 }]*/
import React from 'react';
import {Line} from '@ant-design/charts';
import PropTypes from 'prop-types';
import './LineChart.scss';

const LineChart= (props) => {
  const leadingZero = (num) => {
    return num <= '9'? '0'+num : num;
  };
  const {hourly} = props;
  const config = {
    data: hourly,
    padding: 'auto',
    xField: 'ts',
    yField: 'temp',
    label: {
      formatter: function formatter(v) {
        return `${v.temp}°`;
      },
    },
    xAxis: {
      tickCount: 6,
      label: {
        formatter: function formatter(v) {
          return `${leadingZero(new Date(v*1000).getHours())}:${leadingZero(new Date(v*1000).getMinutes())}`;
        },
      },
    },
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return `${v}°`;
        },
      },
    },
    slider: {
      start: 0,
      end: 0.2,
      formatter: function formatter(v) {
        return `${leadingZero(new Date(v*1000).getHours())}:${leadingZero(new Date(v*1000).getMinutes())}`;
      },
    },
  };
  return (
    <div className='hour-info'>
      <h3 className='hour__title'>24 Hours</h3>
      <Line {...config} />
    </div>
  );
};

LineChart.propTypes = {
  hourly: PropTypes.array,
};

export default LineChart;
