import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { targetNoteSet } from '../stateTree/actions';



class Note extends Component {

    render() {
        // const tag = this.props.note.tags.map(tag => tag)

        return (
            <Fragment>

                <Link    
                    onClick={(event) => {
                        this.props.targetNoteSet(event, this.props.note);
                    }}
                    to={`/note/${this.props.note._id}`}
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
                            <br />
                            {/* {tag} */}
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

