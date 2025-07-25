import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer  from "./reducers/productReducer";
import productDetailsReducer  from "./reducers/productReducer";

  
const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
  