import axios from 'axios';

export const GET_SMURF_START = 'GET_SMURF_START';
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS';
export const GET_SMURF_FAILURE = 'GET_SMURF_FAILURE';

export const REMOVE_SMURF_START = 'REMOVE_SMURF_START';
export const REMOVE_SMURF = 'REMOVE_SMURF';
export const REMOVE_SMURF_FAIL = 'REMOVE_SMURF_FAIL';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';



export const getSmurfs = () => dispatch => {
  dispatch({
    type: GET_SMURF_START
  })
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({
        type: GET_SMURF_SUCCESS,
        payload: response.data,
      })
    })
    .catch(error => {
      dispatch({
        type: GET_SMURF_FAILURE,
        payload: error.message,
      })
    })
}

export const removeSmurf = (id) => dispatch => {
  dispatch({
    type: REMOVE_SMURF_START
  })
  axios
    .delete('http://localhost:3333/smurfs/'+id)
    .then(response => {
      dispatch({
        type: REMOVE_SMURF,
        payload: response.data,
      })
    })
    .catch(error => {
      dispatch({
        type: REMOVE_SMURF_FAIL,
        payload: error.message, 
        id
      })
    });
}

export const addSmurf = (smurfObject) => dispatch => {
  axios
    .post('http://localhost:3333/smurfs/', smurfObject)
    .then(response => {
      dispatch({
        type:ADD_SMURF,
        payload:response.data
      })
    })
    .catch(error=>{
      dispatch({
        type:ADD_SMURF_FAIL,
        payload:error.message
      })
    })
}


export const updateSmurf = (smurfObject) => dispatch => {
  axios
    .post('http://localhost:3333/smurfs/', smurfObject)
    .then(response => {
      dispatch({
        type:ADD_SMURF,
        payload:response.data
      })
    })
    .catch(error=>{
      dispatch({
        type:ADD_SMURF_FAIL,
        payload:error.message
      })
    })
}