import React from 'react'

export const Store = React.createContext();

const initialState = {
    notes:[],
    tags:[]
}

function reducer(state, action) {
    switch (action.type) {
        case 'GET_NOTES':
            return { 
                ...state, 
                notes: action.payload 
            };
        default:
            return state;
    }
}

const StoreProvider = props => {
    const [ state, dispatch ] = React.useReducer(reducer, initialState);
    const value = { 
        state:state, 
        dispatch:dispatch, 
    };
    return <Store.Provider value={value} >{props.children}</Store.Provider>
}

export default StoreProvider
