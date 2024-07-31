import { combineReducers } from 'redux';
import authReducer from './authReducers';
import droneReducer from './droneReducers';

const rootReducer = combineReducers({
    auth: authReducer,
    drone: droneReducer,
});

export default rootReducer;