import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteNote } from '../stateTree/actions';





const Note = props => {
    const [targetNote, setTargetNote] = React.useState(props.targetNote);

    const setActiveNote = (event, destination) => {
        // event.preventDefault();
        let noteFiltered = props.notes.filter(note => note._id === destination);

        setTargetNote(noteFiltered);
        
        // console.log(props);  
        // this.setState({
        //   activeSmurf: smurfFromState
        // });
        // props.history.push(`/note/${destination}`);
    }
    // console.log('Note, single note props:  ',props)

    return (
        <Fragment>

            <Link    
                onClick={event => setActiveNote(event, props.note._id)}
                to={`/note/${props.note._id}`}
                
            >
                <section className='note-card'>
                    
                        <div className='note'>
                            <h5>{props.note.title}</h5>
                            <p>
                                {props.note.textBody}<br />
                            </p>
                        </div>
                    
                </section>
            </Link>
        </Fragment>
    )
}



const mapStateToProps = state => ({
    ...state
})
  
export default connect(
    mapStateToProps, 
    { deleteNote }
)(Note);

