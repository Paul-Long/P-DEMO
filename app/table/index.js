import React from 'react';
import {Table} from '../components';

const {Component} = React;

class TableDemo extends Component {
  render() {
    return (
      <div className='h-app-content'>
        <Table
          rowKey='a'
          columns={columns}
          data={data}
        />
      </div>
    )
  }
}

export default TableDemo;

const columns = [
  {key: 'a', title: '有一格', width: 150},
  {key: 'b', title: '有二格', width: 150},
  {key: 'c', title: '有三格', width: 150},
  {key: 'd', title: '有四格', width: 150},
  {key: 'e', title: '有五格', width: 150}
];

const data = [
  {a: '风来', b: '风走', c: '风大', d: '雨大', e: '雪'}
];
