import React from 'react'
import { Divider, Button } from 'antd'

export const tableConfig = (deleteItem, editItem) => {
  return [
    {
      title: 'Name',
      dataIndex: 'data',
      key: 'data',
      render: text => <a>{text}</a>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        return (
          <span>
            <a onClick={() => editItem(record)}>Edit</a>
            <Divider type='vertical' />
            <a onClick={() => deleteItem(record.key)}>Delete</a>
          </span>
        )
      }
    }
  ]
}
