import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { getNotes } from '../stateTree/actions';

import Sidebar from './Sidebar';
import Notes from './Notes';
import NewNote from './NewNote'
import Welcome from './Welcome';



const App = props => {
  
  
  // React.useEffect(() => {
  //   props.notes.length === 0 && props.getNotes();
  // })

  // console.log('This is the state: ',state)
  // console.log('These are the notes: ',state.notes)

  
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
