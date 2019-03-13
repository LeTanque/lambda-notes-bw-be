import React, { useState, Fragment } from 'react';

import AddNoteForm from './components/AddNoteForm';
import Notes from './components/Notes';


const App = () => {
  const notesAll = [
    { id: 1, title: 'Tania', note: 'Take out the trash' },
    { id: 2, title: '20190203', note: 'Hack the Nokie' },
    { id: 3, title: 'Ben', note: 'benisphere' },
  ]

  const [ notes, setNotes ] = useState(notesAll)

  // const addNote = user => {
  //   user.id = users.length + 1
  //   setUsers([ ...users, user ])
  // }

  return (
    <Fragment>

      <section className='App'>
        
        <nav className=''>
          <h1>Lambda Notes</h1>

          <button className='btn-primary'>
            View Your Notes
          </button>
          <button className='btn-primary'>
            + Create New Note
          </button>

        </nav>


        <div className='note-container'>

          {/* <AddNoteForm addNote={addNote} /> */}
          <Notes notes={notes} />
          
        </div>


      </section>
      

    </Fragment>
  );
}

export default App;
