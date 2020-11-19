import * as type from '../types';

//set initial state
const initialState = {
  kobe: [],
  loading: false,
  error: null
}

export default function kobe(state = initialState, action) {
  switch (action.type) {
    case type.GET_KOBE_DATA_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_KOBE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        kobe: action.kobe
      }
    case type.GET_KOBE_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}
