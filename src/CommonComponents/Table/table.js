import React from 'react'

import { Table } from 'antd'

import { tableConfig } from './config'

export const CustomTable = props => {
  return (
    <div>
      <Table
        columns={tableConfig(props.deleteItem, props.editItem)}
        dataSource={props.dataArray}
      />
    </div>
  )
}
