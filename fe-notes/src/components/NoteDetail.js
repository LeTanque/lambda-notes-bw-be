import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import { noteDetail, deleteNote, updateNoteSet } from '../stateTree/actions';

import Modal from '../components/Modal';


class NoteDetail extends Component { 
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
        }
    }

    toggleModal = () => {  // Toggles modal view when user clicks delete. Then user either closes modal or processes delete
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() { // Makes it so however you got here, the note info will match current note ID in url
        this.props.noteDetail(this.props.id)
    }

    deleteNote = (id) => { // This method gets passed down into the modal
        this.toggleModal();
        this.props.deleteNote(id, this.props.history);
    }

    updateNote = (noteObject) => { // Triggers to send user to the form prefilled with targetNote
        this.props.updateNoteSet(noteObject, this.props.history);
    }

    render() {
        return (
            <Fragment>

                    <section className='note-detail-card'>

                        <h3>{this.props.targetNote.title}</h3>
                        <Fragment>
                            <ReactMarkdown 
                                className='note-detail'
                                source={this.props.targetNote.textBody} 
                            />
                        </Fragment>

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
