import * as actions from '../actions/ActionTypes'

const initialState = [{
  currentlyReading: [],
  wantToRead: [],
  read: []
}]

const categories = (state = initialState, action) => {
  switch (action.type) {
    
    case actions.ADD_TO_CATEGORY:
      let { currentlyReading } = this.state
      return [
        ...state,
        {
          [action.category]: [action.category].push(action.bookId)
        }
      ]

    default:
      return state

    /*
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)
*/
    
  }
}

export default categories