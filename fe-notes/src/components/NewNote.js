import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { addNote, updateNote } from '../stateTree/actions';




class NewNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            textBody:'',
        }
    }

    componentDidMount() {
        if (this.props.editingNote === true) {
            this.setState({
                title:this.props.targetNote.title,
                textBody:this.props.targetNote.textBody,
            })
        }
        // if (this.props.newNote) {
        //     this.setState({
        //         title:'',
        //         textBody:'',
        //     })
        // }
    }

    updateNote = (event) => {
        event.preventDefault();
        this.props.updateNote(this.props.targetNote._id, this.state, this.props.history);
    }

    addNote = (event) => {
        event.preventDefault();
        this.props.addNote(this.state, this.props.history);
    }

    handleInputChange = event => {
        event.persist();
        let value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    };

    render() {

        console.log('NewNote props:  ', this.props)
        console.log('NewNote state:  ', this.state)
        // console.log('NewNote updateNote:  ', this.props.targetNote._id, this.state);
        // console.log('NewNote targetNotes :   ', this.targetNotes)
        // console.log('NewNote noteEditing :   ', this.noteEditing)

        return (
            <Fragment>
                <form>
                    <input 
                        placeholder='Title...'
                        name='title'
                        type='text'
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        placeholder='Note...'
                        name='textBody'
                        type='text'
                        value={this.state.textBody}
                        onChange={this.handleInputChange}
                    />

                    <button onClick={this.addNote}>New Note</button>
                    <button onClick={this.updateNote}>Update</button>
                </form>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    targetNote:state.targetNote,
    newNote:state.newNote,
    editingNote:state.editingNote,
})
  
export default connect(
    mapStateToProps, 
    { addNote, updateNote }
)(NewNote);
