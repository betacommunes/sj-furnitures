import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { productReducer, productDetailsReducer, newReviewReducer } from "./reducers/productReducer";
import cartReducer  from "./reducers/cartReducer";
import { profileReducer, userReducer ,forgotPasswordReducer } from "./reducers/userReducer";
import {newOrderReducer , myOrdersReducer ,   orderDetailsReducer,} from "./reducers/orderReducer"

const reducer = combineReducers({
  products: productReducer,         // for all products
  productDetails: productDetailsReducer, // for single product
  cart: cartReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword : forgotPasswordReducer,
  newOrder : newOrderReducer,
  myOrders : myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
});

const initialState = {
 cart:{
  cartItems: localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  :[],
      shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
 }

};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
