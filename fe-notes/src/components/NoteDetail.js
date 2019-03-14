import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { noteDetail } from '../stateTree/actions';




class NoteDetail extends Component { 
    constructor(props){
        super(props);
        this.state={
        }
    }



    componentDidMount() {

        this.props.noteDetail(this.props.id)
    }

    
    
    render() {
        // console.log('NOTEDETAIL props:  ',props)
        // console.log('Pathname  ',window.location.pathname )
        console.log('NoteDetail.js  props:  ', this.props)


        return (
            <Fragment>


                    <section className='note-card'>
                        NOTE
                            <div className='note'>
                                <h5>{this.props.targetNote.title}</h5>
                                <p>
                                    {this.props.targetNote.textBody}<br />
                                </p>
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
    { noteDetail }
)(NoteDetail);

