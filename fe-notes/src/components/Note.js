import React, { Fragment } from 'react';

const Note = props => {

    // console.log('Note, single note props:  ',props)
    return (
        <Fragment>

            <section className='note-card'>
                <div className='note'>
                    <h5>{props.note.title}</h5>
                    <p>
                        {props.note.textBody}<br />
                    </p>
                </div>
            </section>

        </Fragment>
    )
}

export default Note