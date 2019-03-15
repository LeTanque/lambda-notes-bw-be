import React, { Component } from 'react';
import { connect } from 'react-redux';

import {  } from '../stateTree/actions';



class Modal extends Component { 

    render() {

        if(!this.props.show) {
            return null;
        }

        console.log('Modal props:  ', this.props)
        return (
            <div className="modal-backdrop" >
                <div className="modal-style" >
                    {this.props.children}
                    <div className="modal-footer">
                        <button 
                            className='btn-red'
                            onClick={() => {this.props.deleteNote(this.props.targetNoteID) } }>
                            Delete
                        </button>
                        <button 
                            className='btn-primary'
                            onClick={this.props.toggleModal }>
                            No
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    targetNote:state.targetNote,
    targetNoteID:state.targetNoteID,
})
  
export default connect(
    mapStateToProps, 
    {  }
)(Modal);
