import { combineReducers } from 'redux'
import eventReducer from '../../features/events/eventReducer';
import {reducer as FormReducer} from 'redux-form';
const rootReducer=combineReducers({
    form:FormReducer,
    events:eventReducer
})

export default rootReducer;