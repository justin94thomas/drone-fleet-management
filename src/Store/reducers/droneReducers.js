import { LOAD_DRONES } from '../actions/types';

const initialState = {
    drones: [],
};

export default function droneReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_DRONES:
            return {
                ...state,
                drones: action.payload,
            };
        default:
            return state;
    }
}