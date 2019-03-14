import React, { useState, Fragment } from 'react';

import Sidebar from './components/Sidebar';
import AddNoteForm from './components/AddNoteForm';
import Notes from './components/Notes';


const App = () => {
  const notesAll = [
    { id: 1, title: '20190201', note: 'Take out the trash, Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 2, title: '20190203', note: 'Hack the Nokia' },
    { id: 3, title: 'Ben', note: 'benisphere' },
    { id: 4, title: 'Tania Phone Call', note: 'Refactor the shopping cart' },
    { id: 5, title: '20190303', note: 'Hack the Nokia' },
    { id: 6, title: 'Felix Meeting', note: 'Guerilla Marketing' },
  ]

  const [ notes, setNotes ] = useState(notesAll)

  // const addNote = note => {
  //   note.id = notes.length + 1
  //   setNote([ ...notes, note ])
  // }

  return (
    <Fragment>

      <section className='App'>
        
        <Sidebar />

        
        <div className='note-container'>

          {/* <AddNoteForm addNote={addNote} /> */}
          <Notes notes={notes} />

        </div>


      </section>
      

    </Fragment>
  );
}

export default App;
