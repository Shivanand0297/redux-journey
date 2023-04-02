
import { call, put, takeEvery } from "redux-saga/effects"
// import { productList } from "../actions/productList"
import { fetchProducts } from "../slices/cartSlice";


function* getProducts(){
   let data = yield call(()=> fetch('http://localhost:8800/products'))
  data = yield data.json();
  console.log("data from api call", data)
  yield put(fetchProducts(data))
}

function* productSaga(){
  yield takeEvery(fetchProducts.type, getProducts) 
}

export default productSaga;