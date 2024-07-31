import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';
import AuthData from '../../Utils/data.json';

export const loginUser = (userData) => async (dispatch) => {
    const user = AuthData.users.find(user => user.username === userData.username && user.password === userData.password);
    if (user) {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        localStorage.setItem('isAuthenticated', true);
    } else {
        dispatch({ type: LOGIN_FAILURE, payload: 'Invalid username or password' });
    }
};

export const logoutUser = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.setItem('isAuthenticated', false);
};
