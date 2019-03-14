import {
  GET_NOTES_START,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAIL,
  ADD_NOTE_START,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAIL,
} from '../actions';

  
const initialState = {
  notes: [],
  fetchingNote: false,
  editingNote: false,
  creatingNote: false,
  targetNote:{
    tags:[],
    textBody: "",
    title: "",
    __v: null,
    _id: "",
  },
  editNote: '',
  newNote: false,
  error: null,
}
  
  
  
const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_NOTES_START:
      return {
        ...state,
        creatingNote: false,
        fetchingNote: true,
        newNote:false,
        error: null,
      }
    case GET_NOTES_SUCCESS:
      return {
        ...state,
        notes:action.payload,
        creatingNote: false,
        fetchingNote: false,
        newNote:false,
        error: null,
      }
    case GET_NOTES_FAIL:
      return {
        ...state,
        creatingNote: false,
        newNote:false,
        error: action.payload,
      }
    case ADD_NOTE_START:
      return {
        ...state,
        creatingNote: true,
        newNote:false,
        error: null,
      }
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        targetNote: action.payload,
        creatingNote: false,
        newNote:true,
        error: null,
      }
    case ADD_NOTE_FAIL:
      return {
        ...state,
        error: action.payload,
        newNote:false,
      }
    default:
      return state;
  }
}
  

export default rootReducer


