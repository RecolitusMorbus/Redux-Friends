import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const fetchFriends = () => async dispatch => {
  dispatch({ type: FETCH_FRIENDS });
  try {
    const res = await axios.get(`http://localhost:5000/api/friends`);
    dispatch({ type: FETCH_SUCCESS, payload: res.data.results });
  } catch (err) {
    dispatch({ type: FETCH_FAILURE, payload: err.message });
  };
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN });
  return axios
    .post(`http://localhost:5000/api/login`, creds)
    .then(res => {
      localStorage.setItem({ token: res.data.token });
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    . catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.message }));
};