import React, { Component } from 'react'
import { CustomInput } from './style'

export default class createTodoForm extends Component {
  state = {
    email: ''
  }
  emailChange = e => {
    this.props.fetchName(e.target.value)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props !== nextProps) {
      this.getValue(nextProps)
    }
  }
  getValue = data => {
    this.setState({ email: data })
  }

  render () {
    return (
      <>
        <CustomInput
          placeholder='Your Email'
          onChange={this.emailChange}
          value={this.props.name}
        />
      </>
    )
  }
}
