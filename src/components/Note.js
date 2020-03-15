import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
// import ClampLines from 'react-clamp-lines';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { targetNoteSet } from '../stateTree/actions';



class Note extends Component {
    

    render() {
        return (
            <Fragment key={this.props.note.id}>

                <Link
                    onClick={(event) => this.props.targetNoteSet(event, this.props.note)}
                    to={`/note/${this.props.note.id}`}
                >
                    <section className='note-card'>
                    
                        <div className='note'>
                            <h5>{this.props.note.title}</h5>
                            <hr />
                            <Fragment>
                                <ReactMarkdown 
                                    source={this.props.note.textBody} 
                                    className='note-fade'
                                />
                            </Fragment>
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

