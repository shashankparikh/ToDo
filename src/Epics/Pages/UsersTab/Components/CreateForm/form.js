import React, { Component } from 'react'
import { CustomInput } from './style'

export default class form extends Component {
  state = {
    name: ''
  }
  nameChange = e => {
    this.props.fetchName(e.target.value)
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
          value={this.props.name}
        />
      </>
    )
  }
}
