import * as types from "./actionType.js";
console.log(types);

const RegisterAction = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  try {
    // Simulate successful registration with the provided user data
    const newUser = { ...payload };

    // Dispatch success action with the provided data
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: newUser,
    });

    // Optionally store user data in localStorage
    localStorage.setItem("user", JSON.stringify(newUser));
  } catch (e) {
    // Handle registration failure
    dispatch({ type: types.REGISTER_FAILED });
  }
};

const LoginAction = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  try {
    // Simulate successful login with the provided user data
    const mockToken = "mock-token";

    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: { token: mockToken, user: payload },
    });

    // Optionally store the token/user in localStorage
    localStorage.setItem("token", mockToken);
    localStorage.setItem("user", JSON.stringify(payload));
  } catch (e) {
    // Handle login failure
    dispatch({ type: types.LOGIN_FAILED });
  }
};

const LogoutAction = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_REQUEST });
  try {
    // Clear localStorage (optional)
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Dispatch logout success action
    dispatch({ type: types.LOGOUT_SUCCESS });
  } catch (err) {
    dispatch({ type: types.LOGOUT_FAILED, payload: err });
  }
};

export { RegisterAction, LoginAction, LogoutAction };
