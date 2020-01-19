import React from 'react'
import { Modal, Button } from 'antd'

export function Popup ({ title, show, cancel, add, loading, children }) {
  return (
    <Modal
      centered
      onCancel={cancel}
      onOk={add}
      visible={show}
      title={title}
      footer={[
        <Button key='back' onClick={cancel}>
          Return
        </Button>,
        <Button key='submit' type='primary' loading={loading} onClick={add}>
          Submit
        </Button>
      ]}
    >
      {children}
    </Modal>
  )
}
