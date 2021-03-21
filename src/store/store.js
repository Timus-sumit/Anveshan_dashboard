import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import eventReducer from '../reducers/eventReducer';

const configureStore = ()=>{
    const store = createStore(
        combineReducers({
            auth:authReducer,
            event:eventReducer
        }),
        applyMiddleware(thunk)
    )

    return store;
}

export default configureStore;