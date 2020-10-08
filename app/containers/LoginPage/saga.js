import {  call, put, takeEvery  } from 'redux-saga/effects';
import request from 'utils/request';

import {IS_EXIST_USER} from './constants'
import { getIsExistUserSuccess } from './actions';

const baseUrl = "/api";

export function* getIsExistUser(action){
  const requestURL = `${baseUrl}/getExistUser`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(action.pass)
  };
  try{
    const isExistUser = yield call(request, requestURL, options);
    yield put(getIsExistUserSuccess(isExistUser));
  }
  catch(error){
    console.log("error in exist user");
  }
}

export default function* getIsExistUserSaga(){
  yield takeEvery (IS_EXIST_USER, getIsExistUser());
};
