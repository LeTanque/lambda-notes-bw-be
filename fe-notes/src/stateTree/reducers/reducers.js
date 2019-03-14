import {
    GET_NOTE_START,
  } from '../actions';
  // Be sure to import in all of the action types from `../actions`
  // Reducers specify how the application's state changes in response to actions sent to the store.
  
  const initialState = {
    notes: [],
    fetchingNotes: false,
    error: null
  }
  
  
  
  const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_NOTE_START:
            return {
                ...state,
                fetchingSmurfs: true,
                error: null,
            }

        case GET_NOTE_FAIL:
            return {
                ...state,
                error: action.payload
            }
  
        default:
            return state;
    }
  }
  
  export default rootReducer
  
  /*
   Your initial/default state for this project could *Although does not have to* look a lot like this
   {
     smurfs: [],
     fetchingSmurfs: false
     addingSmurf: false
     updatingSmurf: false
     deletingSmurf: false
     error: null
   }
  */
  
  /*
    You'll only need one smurf reducer for this project.
    Feel free to export it as a default and import as rootReducer. 
    This will guard your namespacing issues.
    There is no need for 'combineReducers' in this project.
    Components can then read your store as, `state` and not `state.fooReducer`.
  */
  