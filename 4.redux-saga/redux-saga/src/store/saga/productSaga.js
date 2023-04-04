import { put, takeEvery } from "redux-saga/effects"
import { FETCH_PRODUCTS, SET_PRODUCTS } from "../actions/action.types";
import axios from "axios";

function* getProducts(){
  let {data} = yield axios.get("http://localhost:8800/products")

  // calling setproduct action to set the data
  yield put({type: SET_PRODUCTS, payload: data}) 
  
  //Creates an Effect description that
  //instructs the middleware to dispatch an action to the Store.
}

function* productSaga(){
  yield takeEvery(FETCH_PRODUCTS, getProducts)
}

export default productSaga;