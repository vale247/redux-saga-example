import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { requestDog, requestDogSuccess, requestDogFailed } from './actions';
import { API_CALL_REQUEST } from './actionTypes';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDogCall() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    yield put(requestDog());
    const response = yield call(fetchDogCall);
    // dispatch a success action to the store with the new dog
    yield put(requestDogSuccess(response.data));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(requestDogFailed());
  }
}
