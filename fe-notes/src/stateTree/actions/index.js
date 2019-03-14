import axios from 'axios';

export const GET_NOTES_START = 'GET_NOTES_START';
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const GET_NOTES_FAIL = 'GET_NOTES_FAIL';

export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAIL = 'ADD_NOTE_FAIL';

// export const REMOVE_NOTE_START = 'REMOVE_NOTE_START';
// export const REMOVE_NOTE_SUCCESS = 'REMOVE_NOTE_SUCCESS';
// export const REMOVE_NOTE_FAIL = 'REMOVE_NOTE_FAIL';




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


// export const removeSmurf = (id) => dispatch => {
//   dispatch({
//     type: REMOVE_SMURF_START
//   })
//   axios
//     .delete('http://localhost:3333/smurfs/'+id)
//     .then(response => {
//       dispatch({
//         type: REMOVE_SMURF,
//         payload: response.data,
//       })
//     })
//     .catch(error => {
//       dispatch({
//         type: REMOVE_SMURF_FAIL,
//         payload: error.message, 
//         id
//       })
//     });
// }


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