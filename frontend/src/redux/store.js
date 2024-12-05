import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

import authReducer from "./AuthReducer/reducer";
import todoReducer from "./TodoReducer/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todoReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
