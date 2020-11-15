import * as type from '../types';

//set initial state
const initialState = {
  lebron: [],
  loading: false,
  error: undefined
}

export default function lebron(state = initialState, action) {
  switch (action.type) {
    case type.GET_LEBRON_DATA_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_LEBRON_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        lebron: action.lebron
      }
    case type.GET_LEBRON_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}