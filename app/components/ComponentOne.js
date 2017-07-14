import React from 'react';
import {Button} from 'antd';
import '../app.less';

class ComponentOne extends React.Component {
  render() {
    return (
      <div>
        <Button type='primary'>Hello World!</Button>
      </div>
    )
  }
}
export default ComponentOne;
