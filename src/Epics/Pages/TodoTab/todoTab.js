import React, { Component } from 'react'
import { ButtonComponent } from '../../../CommonComponents/Button/button'
import { Popup } from '../../../CommonComponents/Modal/Modal'
import TodoForm from './Component/CreateTodoForm/createTodoForm'
import TodoTable from './Component/TodoTable/table'
import { connect } from 'react-redux'
import { fetchEmailAction } from '../../../actions/TodoActions/fetchEmailAction'

class TodoTab extends Component {
  state = {
    showPopup: false,
    name: '',
    value: '',
    count: 0,
    isLoading: false,
    
  }

  showModal = () => {
    this.setState({
      showPopup: true
    })
  }

  handleCancel = () => {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  fetchName = value => {
    this.setState({ name: value })
  }

  handelAdd = () => {
    const createName = {
      data: this.state.name,
      key: this.state.count + 1
    }
    this.props.fetchEmailAction(createName)
    this.setState({
      name: '',
      count: createName.key,
      isLoading: !this.state.isLoading
    })
    setTimeout(() => {
      this.setState({ isLoading: false, showPopup: !this.state.showPopup })
    }, 1000)
  }

  render () {
    const { showPopup, isLoading } = this.state

    return (
      <div>
        <ButtonComponent title='Create Todos' onClick={this.showModal} />
        <Popup
          show={showPopup}
          title='Add the User'
          add={this.handelAdd}
          cancel={this.handleCancel}
          loading={isLoading}
        >
          <TodoForm fetchName={this.fetchName} name={this.state.name}/>
        </Popup>
        <TodoTable />
      
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    fetchEmailAction: data => dispatch(fetchEmailAction(data))
})

const mapStateToProps = state => ({
  getData: state.todoEmailReducer,
  isLoading: state.todoEmailReducer.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoTab)
