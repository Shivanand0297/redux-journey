import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { productReducer } from "./reducers/productReducer";

// product saga
import productSaga from "./saga/productSaga";

import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(productSaga)