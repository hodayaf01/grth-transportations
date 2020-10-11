import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_TRANSPORTATIONS } from './constants';
import { transpotrationLoaded, transpotrationLoadingError } from './actions';

const baseUrl = "/api";

export function* getTransportations() {
  const requestURL = `${baseUrl}/transportation/list`;
  try {
    // Call our request helper (see 'utils/request')
    const list = yield call(request, requestURL);
    yield put(transpotrationLoaded(list));
  } catch (err) {
    yield put(transpotrationLoadingError(err));
  }
}
export default function* loadTransportationData() {
  yield (LOAD_TRANSPORTATIONS, getTransportations());
}