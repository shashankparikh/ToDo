import React, { Component } from 'react'
import {  Divider, Tag } from 'antd'
import { Popup } from '../../../../../CommonComponents/Modal/Modal'
import {CustomTable} from '../../../../../CommonComponents/Table/table'
import EditTodoForm from '../EditTodoForm/editTodoForm'
import { deletedTodoAction } from '../../../../../actions/TodoActions/deleteTodoAction'
import { editedTodoAction } from '../../../../../actions/TodoActions/editTodoAction'
import { connect } from 'react-redux'

let storageData = ''
class table extends Component {
  state = {
    count: 0,
    dataArray: '',
    showModal: false,
    editName: '',
    editedKey: '',
    updatedData: ''
  }
  componentWillReceiveProps (nextProps) {
    if (this.props !== nextProps) {
      this.getTableData(nextProps.getData)
    }
  }

  getTableData = data => {
    this.setState({ dataArray: data.userEmail, count: data.userEmail.key }, () =>
      this.storageData(this.state.dataArray)
    )
  }
  storageData = data => {
    localStorage.setItem('myTodoData', JSON.stringify(data))
  }

  componentDidMount () {
    storageData = JSON.parse(localStorage.getItem('myTodoData'))
    this.setState({ dataArray: storageData })
  }

  deleteItem = key => {
    const arrayCopy = this.state.dataArray.filter(row => row.key !== key)
    this.setState({ dataArray: arrayCopy }, () =>
      this.props.deletedTodoAction(this.state.dataArray)
    )
  }

  editItem = record => {
    this.setState({
      editName: record.data,
      editedKey: record.key,
      showModal: !this.state.showModal
    })
  }

  updatedName = data => {
    this.setState({ editName: data })
  }

  update = () => {
    this.state.dataArray.map(item => {
      if (item.key === this.state.editedKey) {
        item.data = this.state.editName
      }
    })

    this.setState(
      { dataArray: this.state.dataArray, showModal: !this.state.showModal },
      () => this.props.editedTodoAction(this.state.dataArray)
    )
  }
  handleCancel = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    const { dataArray, showModal, editName, editedKey } = this.state
    const { deleteItem, editItem, updatedName } = this
    return (
      <>
        <CustomTable
          deleteItem={deleteItem}
          editItem = {editItem}
           // columns={tableConfig(deleteItem, editItem)}
           dataArray={dataArray}
        />
        <Popup
          show={showModal}
          title='Edit the User'
          add={this.update}
          cancel={this.handleCancel}
        >
          <EditTodoForm
            editName={editName}
            editedKey={editedKey}
            updatedName={updatedName}
          />
        </Popup>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    deletedTodoAction: data => dispatch(deletedTodoAction(data)),
    editedTodoAction: data => dispatch(editedTodoAction(data))
})

const mapStateToProps = state => ({
  getData: state.todoEmailReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(table)
