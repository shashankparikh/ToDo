import React, { Component } from 'react'
import { CustomInput } from '../../../style'


export default class editTodoForm extends Component {
  state = {
    email: '',
    name: ''
  }
  nameChange = e => {
    this.props.updatedName(e.target.value)
  }

  getValue = data => {
    this.setState({ name: data })
  }

  render () {
    const { editName } = this.props

    return (
      <>
        <CustomInput onChange={this.nameChange} defaultValue={editName} />
      </>
    )
  }
}
