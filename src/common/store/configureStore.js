import {createStore } from 'redux';
import rootReducer from '../reducers/rootReducer' ;

export const configureStore=()=>{
    const store=createStore(rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}