import { LOAD_DRONES } from './types';
import AuthData from '../../Utils/data.json';

export const loadDrones = () => async (dispatch) => {
    const droneData = AuthData.drones.length > 0 ? AuthData.drones : [];
    if (droneData) {
        dispatch({ type: LOAD_DRONES, payload: droneData });
    }
};