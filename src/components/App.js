import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { } from '../stateTree/actions';

import Sidebar from './Sidebar';
import Notes from './Notes';
import NoteForm from './NoteForm'
import Welcome from './Welcome';
import NoteDetail from './NoteDetail';



class App extends Component {

  render() {

    return (
      <Fragment>
        <BrowserRouter>
          <section className='App'>
            
            <Sidebar />
  
            <Route
              exact
              path='/'
              render={() => (
                <Notes />
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
                <NoteForm 
                  history={props.history}
                />
              )}
            />
            <Route
              // exact
              path='/note/:id'
              render={props => (
                <NoteDetail
                  id={props.match.params.id}
                  history={props.history}
                />
              )}
            />
            <Route
              // exact
              path='/update-note'
              render={props => (
                <NoteForm
                  history={props.history}
                />
              )}
            />
  
          </section>
        </BrowserRouter>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  notes:state.notes,
})

export default connect(
  mapStateToProps, 
  {  }
)(App);
