import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_NEW_TRANSPORTATION_ID } from './constants';
import { getNewTransportationIdSuccess, getNewTransportationIdError } from './actions';

const baseUrl = "/api";

export function* getNewTransportationId(){
  const requestURL = `${baseUrl}/getNewTransportationId`;
  try{
    const newId = yield call(request, requestURL);
    yield put(getNewTransportationIdSuccess(newId));
  }
  catch(err){
    yield put(getNewTransportationIdError(err));
  }
};
export default function* getNewTransportationIdSaga() {
  yield(GET_NEW_TRANSPORTATION_ID, getNewTransportationId());
}
