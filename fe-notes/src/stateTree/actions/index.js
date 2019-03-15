import axios from 'axios';

export const GET_NOTES_START = 'GET_NOTES_START';
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const GET_NOTES_FAIL = 'GET_NOTES_FAIL';

export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAIL = 'ADD_NOTE_FAIL';

// export const DELETE_NOTE_START = 'DELETE_NOTE_START';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAIL = 'DELETE_NOTE_FAIL';

export const SET_TARGET_NOTE = 'SET_TARGET_NOTE';

// export const NOTE_DETAIL_START = 'NOTE_DETAIL_START';
export const NOTE_DETAIL_SUCCESS = 'NOTE_DETAIL_SUCCESS';
export const NOTE_DETAIL_FAIL = 'NOTE_DETAIL_FAIL';







export const getNotes = () => dispatch => {
  dispatch({
    type: GET_NOTES_START
  })
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      dispatch({
        type: GET_NOTES_SUCCESS,
        payload: response.data,
      })
    })
    .catch(error => {
      dispatch({
        type: GET_NOTES_FAIL,
        payload: error.message,
      })
    })
}

export const addNote = (noteObject) => dispatch => {
  dispatch({
    type: ADD_NOTE_START
  })
  axios
    .post('https://fe-notes.herokuapp.com/note/create', noteObject)
    .then(response => {
      dispatch({
        type:ADD_NOTE_SUCCESS,
        payload:response.data
      })
    })
    .catch(error => {
      dispatch({
        type:ADD_NOTE_FAIL,
        payload:error.message
      })
    })
}

export const deleteNote = (id, history) => dispatch => {
  // dispatch({
  //   type: DELETE_NOTE_START
  // })
  axios
    .delete('https://fe-notes.herokuapp.com/note/delete/'+id)
    .then(response => {
      dispatch({
        type: DELETE_NOTE_SUCCESS,
        payload: response.data,
      })
      history.push('/');
    })
    .catch(error => {
      dispatch({
        type: DELETE_NOTE_FAIL,
        payload: error.message, 
        id
      })
    });
}

export const targetNoteSet = (event, noteObject) => {
  event.persist();
  return {
      type: SET_TARGET_NOTE,
      payload: noteObject,
  }
}

export const noteDetail = (noteID) => dispatch => {
  // dispatch({
  //   type:NOTE_DETAIL_START
  // })
  axios
    .get('https://fe-notes.herokuapp.com/note/get/'+noteID)
    .then(response => {
      dispatch({
        type:NOTE_DETAIL_SUCCESS,
        payload:response.data,
      })
    })
    .catch(error => {
      dispatch({
        type:NOTE_DETAIL_FAIL,
        payload:error.message,
      })
    })
}

// https://fe-notes.herokuapp.com/note/get/5c872600ba23be0015c8ab0a




// export const updateSmurf = (smurfObject) => dispatch => {
//   axios
//     .post('http://localhost:3333/smurfs/', smurfObject)
//     .then(response => {
//       dispatch({
//         type:ADD_SMURF,
//         payload:response.data
//       })
//     })
//     .catch(error=>{
//       dispatch({
//         type:ADD_SMURF_FAIL,
//         payload:error.message
//       })
//     })
// }