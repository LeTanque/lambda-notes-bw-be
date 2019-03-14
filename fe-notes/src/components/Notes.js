import React, { Fragment } from 'react';
import Masonry from 'react-masonry-component';

import Note from './Note';


const masonryOptions = {
    transitionDuration: '0.5s',
    itemSelector: '.note-card',
    gutter: 10,
    percentagePosition: true,
};



const Notes = props => {

    console.log('All of the Notes props:  ',props)

    const childElements = props.notes.map(note => (
        <Fragment key={note.id}>
            <Note note={note} />
        </Fragment>
    ))

    return (
        <Fragment>
            <h3 className='cltgray'>Your Notes:</h3>
            <Masonry
                className={'note-gallery'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {childElements}
            </Masonry>
            
        </Fragment>
    )
}

export default Notes