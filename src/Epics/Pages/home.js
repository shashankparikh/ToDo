import React, { Component } from 'react'
import { Tabs } from 'antd'
import UserTab from './UsersTab/userTab'
import TodoTab from './TodoTab/todoTab'

const { TabPane } = Tabs
class Home extends Component {
  callback = key => {}

  render () {
    return (
      <div>
        <Tabs defaultActiveKey='2' onChange={this.callback}>
          <TabPane tab='Todo' key='1'>
            <TodoTab/>
          </TabPane>
          <TabPane tab='Users' key='2'>
            <UserTab />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Home
