import React, { Fragment } from 'react';
import Note from './Note';


const Notes = props => {
    console.log('All of the Notes props:  ',props)
    return (
        <Fragment>
            <h3>Your Notes:</h3>
            <Note />
        </Fragment>
    )
}

export default Notes