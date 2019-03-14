import React, { Component, Fragment } from 'react';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';

import { } from '../stateTree/actions';

import Note from './Note';


const masonryOptions = {
    transitionDuration: '0.5s',
    itemSelector: '.note-card',
    gutter: 10,
    percentagePosition: true,
};



class Notes extends Component {



    // React.useEffect(() => {
    //     if (props.newNote === true) {
    //         return props.getNotes();
    //     }
    //     if (props.notes.length === 0) {
    //         return props.getNotes();
    //     }        
    // })
    
    

    
    render() {
        
        console.log('All of the Notes props:  ', this.props)

        const childElements = this.props.notes.map(note => (
            <Fragment key={note._id}>
                <Note note={note}  />
            </Fragment>
        ))
    
        return (
            <Fragment>
                <section className='note-container'>
                    
    
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
    
    
                </section>            
            </Fragment>
        )
        
    }
    
}

const mapStateToProps = state => ({
    notes:state.notes,
    fetchingNote:state.fetchingNote,
})
  
export default connect(
    mapStateToProps, 
    { }
)(Notes);
