import { LOAD_DRONES } from './types';

export const loadDrones = () => async (dispatch) => {
    const response = await fetch('data.json');
    const data = await response.json();
    dispatch({
        type: LOAD_DRONES,
        payload: data.drones,
    });
};