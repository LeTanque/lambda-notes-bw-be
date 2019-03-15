import {
  GET_NOTES_START,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAIL,
  ADD_NOTE_START,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAIL,
  SET_TARGET_NOTE,
  NOTE_DETAIL_SUCCESS,
  NOTE_DETAIL_FAIL,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  UPDATE_NOTE_START,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
} from '../actions';

  
const initialState = {
  notes: [],
  fetchingNote:false,
  editingNote:false,
  creatingNote:false,
  newNote: false,
  deletedNote:'',
  targetNote:{
    tags:[],
    textBody:'',
    title:'',
    _id:'',
  },
  targetNoteID:'',
  error: null,
}

  
  
const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_NOTES_START:
      return {
        ...state,
        creatingNote: false,
        fetchingNote: true,
        targetNote:'',
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
        editingNote:false,
        error: null,
      }
    case GET_NOTES_FAIL:
      return {
        ...state,
        creatingNote:false,
        newNote:false,
        error: action.payload,
      }
    case ADD_NOTE_START:
      return {
        ...state,
        creatingNote:true,
        editingNote:false,
        error: null,
      }
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        targetNoteID:action.payload,
        creatingNote:false,
        editingNote:false,
        newNote:true,
        error: null,
      }
    case ADD_NOTE_FAIL:
      return {
        ...state,
        error: action.payload,
        newNote:false,
      }
    case SET_TARGET_NOTE:
      return {
        ...state,
        targetNote:action.payload,
        targetNoteID:action.payload._id,
        error: null,
      }
    case NOTE_DETAIL_SUCCESS:
      return {
        ...state,
        editingNote:false,
        targetNote:action.payload,
        targetNoteID:action.payload._id,
        error: null,
      }
    case NOTE_DETAIL_FAIL:
      return {
        ...state,
        editingNote:false,
        error: action.payload,
      }
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        deletedNote:action.payload,
        error: action.payload,
      }
    case DELETE_NOTE_FAIL:
      return {
        ...state,
        deletedNote:null,
        error: action.payload,
      }
    case UPDATE_NOTE_START:
      return {
        ...state,
        editingNote:true,
        newNote:false,
        targetNote:action.payload,
        targetNoteID:action.payload._id,
        error:null,
      }
    case UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        editingNote:false,
        targetNote:action.payload,
        error:null,
      }
    case UPDATE_NOTE_FAIL:
      return {
        ...state,
        editingNote:false,
        error:action.payload,
      }

    default:
      return state;
  }
}
  

export default rootReducer


