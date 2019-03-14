import React, { Fragment } from 'react';

import { Store } from '../stateTree/Store';


import Sidebar from './Sidebar';
import Notes from './Notes';


const App = () => {

  const { state, dispatch } = React.useContext(Store);



  const getNotes = async () => {
    const data = await fetch('https://fe-notes.herokuapp.com/note/get/all');
    const dataJSON = await data.json();
    return dispatch({
      type: 'GET_NOTES',
      payload: dataJSON
    });
  };


  React.useEffect(() => {
    state.notes.length === 0 && getNotes();
  });



  console.log('This is the state: ',state)
  console.log('These are the notes: ',state.notes)
  return (
    <Fragment>
      <section className='App'>
        

        <Sidebar />



      </section>      
    </Fragment>
  );
}

export default App;
