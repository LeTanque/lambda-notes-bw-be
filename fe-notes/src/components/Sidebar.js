import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {

    return (
        <Fragment>
            
                <nav className=''>


                    <Link to='/welcome'><h1>Lambda Notes</h1></Link>

                    <Link to='/'>
                        <button className='btn-primary'>
                            View Your Notes
                        </button>
                    </Link>
                    
                    <Link to='/new-note' >
                        <button className='btn-primary'>
                            + Create New Note
                        </button>
                    </Link>

                   
                </nav>

        </Fragment>
    )
}

export default Sidebar