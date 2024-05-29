import { takeEvery, put, call } from "redux-saga/effects";
import { DELETE, SHOW, VAL } from "../action/constant";
import axios from "axios";

function* getValue() {
  try {
    console.log("Fetching data...");
    let response = yield call(fetch, 'https://fakestoreapi.com/products');
    let data = yield response.json();
    console.log("Data fetched:", data);
    yield put({ type: VAL, data });
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error accordingly, e.g., dispatch an error action
  }
}

function* deleteValue(action) {
  try {
    const url = `https://fakestoreapi.com/products/${action.payload}`;
    yield call(axios.delete, url);
    yield put({ type: DELETE, payload: action.payload });
    console.log("Deleted item with id:", action.payload);
  } catch (error) {
    console.error("Error deleting item:", error);
    // Handle error accordingly, e.g., dispatch an error action
  }
}

function* ProductSaga() {
  yield takeEvery(SHOW, getValue);
  yield takeEvery(DELETE, deleteValue);
}

export default ProductSaga;
