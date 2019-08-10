import { combineReducers } from 'redux'
import eventReducer from '../../features/events/eventReducer';
import {reducer as FormReducer} from 'redux-form';
import modalReducer from '../../features/Modal/modalReducer';
import authReducer from '../../features/auth/authReducer';
 
const rootReducer=combineReducers({
    form:FormReducer,
    events:eventReducer,
    modals:modalReducer,
    auth:authReducer
})

export default rootReducer;