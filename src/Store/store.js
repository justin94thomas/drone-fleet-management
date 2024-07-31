import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducers';
import droneReducer from './reducers/droneReducers';

const rootReducer = combineReducers({
    auth: authReducer,
    drones: droneReducer,
});

const store = createStore(rootReducer);

export default store;