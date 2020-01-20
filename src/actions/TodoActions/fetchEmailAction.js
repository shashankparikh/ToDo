export const fetchEmailAction = value => {
    console.log(value,"value ina action")
    return {
      type: 'FETCH_TODO_EMAIL',
      value: value
    }
  }
  