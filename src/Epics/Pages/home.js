import React, { Component } from 'react'
import { Tabs } from 'antd'
import UserTab from './Components/UsersTab/userTab'

const { TabPane } = Tabs
class Home extends Component {
  callback = key => {}

  render () {
    return (
      <div>
        <Tabs defaultActiveKey='2' onChange={this.callback}>
          <TabPane tab='Todo' key='1'>
            Content of Todo
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
