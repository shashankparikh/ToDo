import React from 'react'
import { Button } from 'antd'
import {CustomModal} from './style'

export function Popup ({ title, show, cancel, add, loading, children }) {
  return (
    <CustomModal
      centered
      onCancel={cancel}
      onOk={add}
      visible={show}
      title={title}
      footer={[
        <Button key='back' onClick={cancel}>
          Cancel
        </Button>,
        <Button key='submit' type='primary' loading={loading} onClick={add}>
          Submit
        </Button>
      ]}
    >
      {children}
    </CustomModal>
  )
}
