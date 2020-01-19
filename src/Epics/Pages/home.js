import React, { Component } from 'react'
import { Tabs } from 'antd'
import { connect } from 'react-redux'
import UserTab from './Components/UsersTab/userTab'
import { simpleAction } from '../../actions/simpleAction'
import { HomeConetent } from './style'

const { TabPane } = Tabs
class Home extends Component {
  simpleAction = event => {
    this.props.simpleAction()
  }

  callback = key => {
    console.log(key)
  }

  render () {
    return (
      <div>
        <Tabs defaultActiveKey='1' onChange={this.callback}>
          <TabPane tab='Todo' key='1'>
            Content of Tab Pane
          </TabPane>
          <TabPane tab='Users' key='2'>
            <UserTab />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
  getData: state.simpleReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
