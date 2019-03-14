import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { getNotes } from '../stateTree/actions';

import Sidebar from './Sidebar';
import Notes from './Notes';
import NewNote from './NewNote'
import Welcome from './Welcome';
import NoteDetail from './NoteDetail';


const App = props => {
  
  
  const [targetNote, setTargetNote] = React.useState(props.targetNote);
  
  React.useEffect(() => {
    let noteFiltered = props.notes.filter(note => note._id === destination);

    setTargetNote(noteFiltered);
  })


  const setActiveNote = (event, destination) => {

    let noteFiltered = props.notes.filter(note => note._id === destination);

    setTargetNote(noteFiltered);
  
  }

  // console.log('This is the state: ',state)
  // console.log('These are the notes: ',state.notes)



  console.log('target note',targetNote,props.targetNote)
  // console.log('props.notes',props.notes)
  
  return (
    <Fragment>
      <BrowserRouter>
        <section className='App'>
          


          <Sidebar />


          <Route
            exact
            path='/'
            render={props => (
              <Notes 
                notes={props.notes} 
                // setActiveNote={setActiveNote}
              />
            )}
          />
          <Route
            path='/welcome'
            render={() => (
              <Welcome />
            )}
          />
          <Route
            path='/new-note' 
            render={props => (
              <NewNote 
                notes={props.notes}
              />
            )}
          />
          <Route
            exact
            path='/note/:id'
            render={() => (
              <NoteDetail 
                // notes={props.notes}
                // setActiveNote={setActiveNote}
                targetNote={targetNote}
              />
            )}
          />

        </section>
      </BrowserRouter>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  ...state
})

export default connect(
  mapStateToProps, 
  { getNotes }
)(App);
