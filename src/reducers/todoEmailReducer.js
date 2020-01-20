const initialState = {
    isLoading: true,
    userEmail: []
  }
  
  export default function (state = initialState, action) {
      console.log(action.value,"in reducer")
    switch (action.type) {
      case 'FETCH_TODO_EMAIL':
        return {
          ...state,
          userEmail: [...state.userEmail, action.value],
          isLoading: false
        }
      case 'DELETED_TODO_ARRAY':
        return {
          ...state,
          userEmail: [...action.value],
          isLoading: false
        }
      case 'EDITED_TODO_ARRAY':
        return {
          ...state,
          userEmail: [...action.value],
          isLoading: false
        }
  
      default:
        return state
    }
  }
  