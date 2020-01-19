const initialState = {
  isLoading: true,
  userName: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_NAME':
      return {
        ...state,
        userName: [...state.userName, action.value],
        isLoading: false
      }
    case 'DELETED_ARRAY':
      return {
        ...state,
        userName: [...action.value],
        isLoading: false
      }
    case 'EDITED_ARRAY':
      return {
        ...state,
        userName: [...action.value],
        isLoading: false
      }

    default:
      return state
  }
}
