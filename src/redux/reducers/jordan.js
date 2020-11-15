import * as type from '../types';

//set initial state
const initialState = {
  jordan: [],
  loading: false,
  error: undefined
}

export default function jordan(state = initialState, action) {
  switch (action.type) {
    case type.GET_JORDAN_DATA_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_JORDAN_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        jordan: action.jordan
      }
    case type.GET_JORDAN_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}


