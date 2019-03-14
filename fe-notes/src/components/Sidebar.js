import React, { Fragment } from 'react';

const Sidebar = () => {

    return (
        <Fragment>

            <nav className=''>
                <h1>Lambda Notes</h1>

                <button className='btn-primary'>
                    View Your Notes
                </button>
                <button className='btn-primary'>
                    + Create New Note
                </button>

            </nav>

        </Fragment>
    )
}

export default Sidebar