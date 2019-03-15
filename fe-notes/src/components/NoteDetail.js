import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { noteDetail, deleteNote, updateNoteSet } from '../stateTree/actions';

import Modal from '../components/Modal';


class NoteDetail extends Component { 
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
        this.props.noteDetail(this.props.id)
    }

    deleteNote = (id) => {
        this.toggleModal();
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

                            <Modal 
                                show={this.state.isOpen}
                                deleteNote={this.deleteNote}
                                toggleModal={this.toggleModal}>
                                Are you sure you want to delete this?
                            </Modal>

                            <div 
                                className='note-edit-links'
                                onClick={() => this.updateNote(this.props.targetNote)}>
                                edit
                            </div>

                            <div 
                                className='note-edit-links'
                                onClick={this.toggleModal}>
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
