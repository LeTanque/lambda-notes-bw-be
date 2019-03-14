import {
  GET_NOTES_START,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAIL,
} from '../actions';

  
const initialState = {
  notes: [],
  fetchingNote: false,
  error: null
}
  
  
  
const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_NOTES_START:
      return {
        ...state,
        fetchingNote: true,
        error: null,
      }
    case GET_NOTES_SUCCESS:
      return {
        ...state,
        fetchingNote: true,
        error: null,
      }
    case GET_NOTES_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}
  

export default rootReducer
