import React, { Fragment } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { deleteNote } from '../stateTree/actions';





const NoteDetail = props => {
    const [targetNote, setTargetNote] = React.useState(props.targetNote);

    // React.useEffect(() => {
    //     console.log(props)
    // })

    // console.log('NOTEDETAIL props:  ',props)
    // console.log('Pathname  ',window.location.pathname )
    console.log(props.targetNote, targetNote)

    return (
        <Fragment>


                <section className='note-card'>
                    NOTE
                        <div className='note'>
                            <h5>{props.targetNote.title}</h5>
                            <p>
                                {props.targetNote.textBody}<br />
                            </p>
                        </div>
                    
                </section>
        </Fragment>
    )
}



const mapStateToProps = state => ({
    // notes: state.notes,
    targetNote: state.targetNote
})
  
export default connect(
    mapStateToProps, 
    {  }
)(NoteDetail);

// export default NoteDetail

