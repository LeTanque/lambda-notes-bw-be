import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { targetNoteSet } from '../stateTree/actions';



class Note extends Component {



    render() {

        // console.log('Note.js:  ', this.props)

        return (
            <Fragment>

                <Link    
                    onClick={(event) => {
                        this.props.targetNoteSet(event, this.props.note);
                    }}
                    to={`/note/${this.props.note._id}`}
                >
                    <section className='note-card'>
                        
                            <div className='note'>
                                <h5>{this.props.note.title}</h5>
                                <p>
                                    {this.props.note.textBody}<br />
                                </p>
                            </div>
                        
                    </section>
                </Link>

            </Fragment>
        )
    }
}



const mapStateToProps = state => ({
    notes:state.notes,
    targetNote:'',
})
  
export default connect(
    mapStateToProps, 
    { targetNoteSet }
)(Note);

