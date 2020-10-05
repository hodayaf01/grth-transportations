
// import { call, put, takeLatest } from 'redux-saga/effects';
// import request from 'utils/request';
// import { LOAD_TRANSPORTATIONS } from './constants';
// import { transpotrationLoaded, transpotrationLoadingError } from './actions';


// const baseUrl = "/api";

// export function* getTransportations() {
//   const requestURL = `${baseUrl}/transportation/list`;

//   try {
//     // Call our request helper (see 'utils/request')
//     const list = yield call(request, requestURL);
//     yield put(transpotrationLoaded(list));
//   } catch (err) {
//     yield put(transpotrationLoadingError(err));
//   }
// }

// /**
//  * Root saga manages watcher lifecycle
//  */
// export default function* loadTransportationData() {
//   yield takeLatest(LOAD_TRANSPORTATIONS, getTransportations);
// }
