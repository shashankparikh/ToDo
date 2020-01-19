import React, { Component } from 'react'
import { CustomInput } from './style'

export default class form extends Component {
  state = {
    email: '',
    name: ''
  }
  nameChange = e => {
    this.props.fetchName(e.target.value)
  }
  emailChange = e => {
    this.setState({ email: e.target.value })
  }

  componentWillReceiveProps (nextProps) {
    if (this.props !== nextProps) {
      this.getValue(nextProps)
    }
  }
  getValue = data => {
    this.setState({ name: data })
  }

  render () {
    return (
      <>
        <CustomInput
          placeholder='Your Name'
          onChange={this.nameChange}
          defaultValue={this.state.name}
        />
        <CustomInput placeholder='Your Email' onChange={this.emailChange} />
      </>
    )
  }
}
