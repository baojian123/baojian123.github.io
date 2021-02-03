import React from 'react';
import PropTypes from 'prop-types';
import FortnightInfoItem from '../FortnightInfoItem/FortnightInfoItem';

class FortnightInfoList extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    fortnight: PropTypes.array,
  }
  render() {
    const {fortnight} = this.props;
    return (
      <ul className='fortnight-list'>
        {
          fortnight.map((item, key) => {
            const isShow = (key>='1' && key<='7');
            return (
              <>
                {isShow && <FortnightInfoItem key={key} itemInfo={item}/>}
              </>
            );
          })
        }
      </ul>
    );
  }
};

export default FortnightInfoList;
