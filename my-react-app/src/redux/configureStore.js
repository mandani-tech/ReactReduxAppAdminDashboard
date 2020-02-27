import { createStore, applyMiddlleware } from 'redux';
import rootReducer  from './reducers';
import reduxImmutableState from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
    return createStore (
        rootReducer,
        initialState,
        applyMiddlleware(reduxImmutableStateInvariant)
    );
}