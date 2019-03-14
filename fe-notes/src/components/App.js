import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { getNotes } from '../stateTree/actions';

import Sidebar from './Sidebar';
import Notes from './Notes';
import NewNote from './NewNote'
import Welcome from './Welcome';
import NoteDetail from './NoteDetail';



class App extends Component {
  state = {
    notes:[],
  }
  
  componentDidMount() {
    if (this.props.newNote === true) {
      return this.props.getNotes();
    }
    if (this.props.notes.length === 0) {
      return this.props.getNotes();
    }    
  }
  
  // const [targetNote, setTargetNote] = React.useState(props.targetNote);
  
  // React.useEffect(() => {
  //   let noteFiltered = props.notes.filter(note => note._id === destination);

  //   setTargetNote(noteFiltered);
  // })


  setActiveNote = (event, destination) => {
    let noteFiltered = this.props.notes.filter(note => note._id === destination);
    this.setState({
      targetNote:noteFiltered,
    });
  }

  render() {
    // console.log('This is the state: ',state)
    // console.log('These are the notes: ',state.notes)
    // console.log('target note',targetNote,props.targetNote)
    console.log('App.js props:  ', this.props)

    return (
      <Fragment>
        <BrowserRouter>
          <section className='App'>
            
  
  
            <Sidebar />
  
  
            <Route
              exact
              path='/'
              render={() => (
                <Notes 
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
              // exact
              path='/note/:id'
              render={(props) => (
                <NoteDetail
                  id={props.match.params.id} 
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
  fetchingNote:state.fetchingNote,
})

export default connect(
  mapStateToProps, 
  { getNotes }
)(App);
