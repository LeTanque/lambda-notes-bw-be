import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { addNote } from '../stateTree/actions';



const NewNote = props => {


    const [targetNotes, setNotes] = React.useState(props.targetNote);

    

    const handleInputChange = event => {
        event.persist();
        let value = event.target.value;
        setNotes({ 
            ...targetNotes,
            [event.target.name]: value
        });
    };
    

    const createNote = (event) => {
        event.preventDefault();
        props.addNote(targetNotes)
    }


    // console.log('NewNote props:  ',props)
    // console.log('NewNote Hook :   ',targetNotes)



    return (
        <Fragment>
            <form onSubmit={createNote} >
                <input 
                    placeholder='Title...'
                    name='title'
                    type='text'
                    value={targetNotes.title}
                    onChange={handleInputChange}
                />
                <input 
                    placeholder='Note...'
                    name='textBody'
                    type='text'
                    value={targetNotes.textBody}
                    onChange={handleInputChange}
                />
                <button onSubmit={createNote}>Submit</button>
            </form>
        </Fragment>
    )
}


const mapStateToProps = state => ({
    ...state
})
  
export default connect(
    mapStateToProps, 
    { addNote }
)(NewNote);
