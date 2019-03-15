import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { WithContext as ReactTags } from 'react-tag-input';

import { addNote, updateNote } from '../stateTree/actions';


// const KeyCodes = {comma: 188,enter: 13,};
// const delimiters = [KeyCodes.comma, KeyCodes.enter];

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            textBody:'',
            tags:[ // There doesn't exist a way to send tags to the server through the API, afaik
                { id: "Thailand", text: "Thailand" }, // But the functionality exists here, at least in part
                { id: "India", text: "India" }
            ],
        }
    }

    componentDidMount() { // If editingNote state is true, set state equal to props
        if (this.props.editingNote) {
            this.setState({
                title:this.props.targetNote.title,
                textBody:this.props.targetNote.textBody,
            })
        } else {
        }
    }

    pushNote = event => { // Depending on editingNote state, either updateNote or addNote
        event.preventDefault();
        if (this.props.editingNote) {
            this.props.updateNote(this.props.targetNote._id, this.state, this.props.history);
        } else {
            this.props.addNote(this.state, this.props.history);
        }
    }

    handleInputChange = event => {
        event.persist();
        let value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    };

    handleTagDelete(i) {
        const { tags } = this.state;
        this.setState({
            tags: tags.filter((tag, index) => index !== i),
        });
    }
 
    handleTagAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }
 
    handleTagDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        this.setState({ 
            tags: newTags 
        });
    }

    render() {

        // Change header and button to reflect editingNote state
        let header;
        let button;
        if (this.props.editingNote) {
            header = 'Edit Note:';
            button = 'Update';
        } else {
            header = 'Create New Note:'
            button = 'Save';
        }

        console.log('NoteForm props:  ', this.props)

        return (
            <Fragment>
                <section className='note-form'>
                    <h3>{header}</h3>
                    
                    <form >
                        <input 
                            placeholder='Note Title...'
                            name='title'
                            type='text'
                            value={this.state.title}
                            onChange={this.handleInputChange}
                        />
                        {/* <ReactTags 
                            tags={this.state.tags}
                            delimiters={delimiters} 
                            handleDelete={this.handleTagDelete}
                            handleAddition={this.handleTagAddition}
                            handleDrag={this.handleTagDrag}
                        /> */}
                        <textarea 
                            placeholder='Note Content...'
                            name='textBody'
                            type='text'
                            value={this.state.textBody}
                            onChange={this.handleInputChange}
                        />
                        
                        <button className='btn-primary' onClick={this.pushNote}>{button}</button>
                    </form>
                </section>
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
)(NoteForm);
