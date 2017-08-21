import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'antd';

const {Component} = React;

class TablePagination extends Component {
  constructor(props) {
    super(props);
    this.BASE_SIZE = props.pageSize || 10;
  }

  static defaultProps = {
    isScroll: true
  };

  onChange = (page, pageSize) => {
    const {onChange} = this.props;
    if (typeof onChange === 'function') {
      onChange(page, pageSize);
    }
  };

  render() {
    const height = this.props.height || 0;
    const pageSize = this.props.pageSize || 10;
    return (
      <div className='rs-table-pagination' style={{height, lineHeight: `${height}px`}}>
        <Pagination
          current={this.props.current}
          pageSize={pageSize}
          total={this.props.total}
          onChange={this.onChange}
          onShowSizeChange={this.onChange}
          showSizeChanger
          pageSizeOptions={[this.BASE_SIZE + '', this.BASE_SIZE * 2 + '', this.BASE_SIZE * 3 + '', this.BASE_SIZE * 4 + '']}
          showTotal={(total, range) => `共 ${total} 条  当前 第 ${range[0]}-${range[1]} 条 `}
        />
      </div>
    )
  }
}

export default TablePagination;

TablePagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  onChange: PropTypes.func,
  height: PropTypes.number
};
