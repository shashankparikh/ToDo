import React, { Component } from 'react'
import { Table, Divider, Tag } from 'antd'
import { Popup } from '../../../../../CommonComponents/Modal/Modal'
import EditForm from '../EditForm/editForm'
import { deletedArrayAction } from '../../../../../actions/UserActions/deleteArrayAction'
import { editedArrayAction } from '../../../../../actions/UserActions/editedArrayAction'
import { tableConfig } from './config'
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
    this.setState({ dataArray: data.userName, count: data.userName.key }, () =>
      this.storageData(this.state.dataArray)
    )
  }
  storageData = data => {
    localStorage.setItem('myData', JSON.stringify(data))
  }

  componentDidMount () {
    storageData = JSON.parse(localStorage.getItem('myData'))
    this.setState({ dataArray: storageData })
  }

  deleteItem = key => {
    const arrayCopy = this.state.dataArray.filter(row => row.key !== key)
    this.setState({ dataArray: arrayCopy }, () =>
      this.props.deletedArrayAction(this.state.dataArray)
    )
  }

  editItem = record => {
    console.log(record,"record")

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
      () => this.props.editedArrayAction(this.state.dataArray)
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
        <Table
          columns={tableConfig(deleteItem, editItem)}
          dataSource={dataArray}
        />
        <Popup
          show={showModal}
          title='Edit the User'
          add={this.update}
          cancel={this.handleCancel}
        >
          <EditForm
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
  deletedArrayAction: data => dispatch(deletedArrayAction(data)),
  editedArrayAction: data => dispatch(editedArrayAction(data))
})

const mapStateToProps = state => ({
  getData: state.userNameReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(table)
