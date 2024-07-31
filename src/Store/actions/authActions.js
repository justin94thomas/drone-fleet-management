import { LOGIN_SUCCESS, LOGOUT } from './types';

export const loginUser = (userData) => async (dispatch) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: userData,
    });
};

export const logoutUser = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
};

