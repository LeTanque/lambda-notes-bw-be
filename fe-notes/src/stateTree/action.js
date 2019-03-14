import React from 'react';

import { Store } from './Store';




const action = (props) => {
    const { state, dispatch } = React.useContext(Store);

    console.log(state)
    console.log(props)
    return 
}
export default action