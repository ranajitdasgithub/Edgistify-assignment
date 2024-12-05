import * as types from "./actionType";

const initialState = {
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
    case types.LOGIN_REQUEST:
    case types.LOGOUT_REQUEST:
      return { ...state, isLoading: true };

    case types.REGISTER_SUCCESS:
      return { ...state, isLoading: false, user: action.payload };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload.token,
        user: action.payload.user,
      };

    case types.LOGOUT_SUCCESS:
      return { ...initialState };

    case types.REGISTER_FAILED:
    case types.LOGIN_FAILED:
    case types.LOGOUT_FAILED:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default authReducer;
