import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_NEW_TRANSPORTATION_ID, ADD_NEW_TRANSPORTATION } from './constants';
import { getNewTransportationIdSuccess, getNewTransportationIdError, addNewTransportationSuccess } from './actions';

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

export function* addNewTransportation(action){
  const requestURL = `${baseUrl}/add`;
  const data = {
    customerId: action.newTransportation.customerId,
    name: action.newTransportation.name,
    fromLatitude: action.newTransportation.fromlat,
    fromLongitude: action.newTransportation.fromlng,
    toLatitude: action.newTransportation.tolat,
    toLongitude: action.newTransportation.tolng,
    isArrived: false
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  };
  try{
    const newList = yield call(request, requestURL, options);
    yield put(addNewTransportationSuccess(newList));
  }
  catch(err){
    console.log(`${err} error in add transportation`);  }
}
export default function* getNewTransportationIdSaga() {
  yield (GET_NEW_TRANSPORTATION_ID, getNewTransportationId);
  yield takeEvery (ADD_NEW_TRANSPORTATION, addNewTransportation);
}
