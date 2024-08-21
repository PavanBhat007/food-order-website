import {
  legacy_createStore as create_store,
  combineReducers, // needed because we are using 1+ reducers
  applyMiddleware, // needed to use any middleware
  compose, // utility for convenience to improve readability
} from "redux";

// "thunk" => piece of code that does some delayed work
// thunks -> std approach for async logic in Redux apps
import thunk from "redux-thunk"; // helps with data fetching

import { restaurantReducer } from "./reducers/restaurantReducer";
import { menuReducer } from "./reducers/menuReducer";
import {
  authReducer,
  forgotPasswordReducer,
  userReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  myOrderReducer,
  newOrderReducer,
  orderDetailsReducer,
} from "./reducers/orderReducer";

const reducer = combineReducers({
  restaurants: restaurantReducer,
  menus: menuReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrderReducer,
  orderDetails: orderDetailsReducer,
});

// to use redux devtools browser extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]; // middleware handled by thunk

const store = create_store(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
