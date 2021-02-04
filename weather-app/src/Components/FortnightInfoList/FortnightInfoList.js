import React from 'react';
import PropTypes from 'prop-types';
import FortnightInfoItem from '../FortnightInfoItem/FortnightInfoItem';
import './FortnightInfoList.scss';
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
      <>
        <h3 className='fortnight-title'>Next 7 Days</h3>
        <ol className='fortnight-list'>
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
        </ol>
      </>
    );
  }
};

export default FortnightInfoList;
