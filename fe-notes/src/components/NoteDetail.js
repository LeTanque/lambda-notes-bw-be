import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { noteDetail, deleteNote, updateNoteSet } from '../stateTree/actions';



class NoteDetail extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }


    componentDidMount() {
        this.props.noteDetail(this.props.id)
    }

    deleteNote = (id) => {
        this.props.deleteNote(id, this.props.history);
    }

    updateNote = (noteObject) => {
        this.props.updateNoteSet(noteObject, this.props.history);
    }

    render() {

        return (
            <Fragment>

                    <section className='note-detail-card'>
                        <div className='note-detail'>
                            <h3>{this.props.targetNote.title}</h3>
                            <p>
                                {this.props.targetNote.textBody}<br />
                            </p>
                        </div>
                        <div className='note-detail-buttons'>
                            <div 
                                className='note-edit-links'
                                onClick={() => this.updateNote(this.props.targetNote)}>
                                edit
                            </div>
                            <div 
                                className='note-edit-links'
                                onClick={() => this.deleteNote(this.props.id)}>
                                delete
                            </div>

                        </div>
                    </section>

            </Fragment>
        )

    } 
    
}

const mapStateToProps = state => ({
    targetNote:state.targetNote,
    targetNoteID:state.targetNoteID,
})
  
export default connect(
    mapStateToProps, 
    { noteDetail, deleteNote, updateNoteSet }
)(NoteDetail);
