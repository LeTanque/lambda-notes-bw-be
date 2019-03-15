import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { noteDetail, deleteNote } from '../stateTree/actions';




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


    render() {

        // console.log('NOTEDETAIL props:  ',props)
        // console.log('Pathname  ',window.location.pathname )
        console.log('NoteDetail.js  props:  ', this.props)

        return (
            <Fragment>


                    <section className='note-detail-card'>
                        <div className='note-detail'>
                            <h5>{this.props.targetNote.title}</h5>
                            <p>
                                {this.props.targetNote.textBody}<br />
                            </p>
                        </div>
                        <div className='note-detail-buttons'>
                            <button 
                                className='btn-primary'
                                // onClick={}
                                >UPDATE</button>
                            <button 
                                className='btn-red'
                                onClick={()=>this.deleteNote(this.props.id)}
                                >DELETE</button>    
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
    { noteDetail, deleteNote }
)(NoteDetail);

