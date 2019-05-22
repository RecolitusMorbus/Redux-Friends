import {
    FETCH_FRIENDS, FETCH_SUCCESS, FETCH_FAILURE,
    // LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE
} from '../actions';

const iniState = {
    friends: [],
    fetching: false,
    error: ''
};

export const friendsReducer = (state = iniState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetching: false
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    // case LOGIN:
    //   return {
    //     ...state,

    //   }
    default:
      return state;
  }
}