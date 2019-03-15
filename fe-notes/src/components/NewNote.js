import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { addNote } from '../stateTree/actions';




class NewNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            textBody:'',
        }
    }

    
    createNote = () => {
        this.setState({
            title:'',
            textBody:'',
        });
        this.props.addNote(this.state);
    }


    handleInputChange = event => {
        event.persist();
        let value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    };




    
    render() {

        // console.log('NewNote props:  ', this.props)
        // console.log('NewNote state:  ', this.state)
        // console.log('NewNote targetNotes :   ', this.targetNotes)
        // console.log('NewNote noteEditing :   ', this.noteEditing)

        return (
            <Fragment>
                <form onSubmit={this.createNote} >
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
                    <button onSubmit={this.createNote}>Submit</button>
                </form>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    targetNote:state.targetNote,
    newNote:state.newNote,
})
  
export default connect(
    mapStateToProps, 
    { addNote }
)(NewNote);
