
import { IS_EXIST_USER, IS_EXIST_USER_SUCCESS } from './constants';

export function getIsExistUser(pass) {
  return {
    type: IS_EXIST_USER,
    pass,
  };
}

export function getIsExistUserSuccess(user) {
  return {
    type: IS_EXIST_USER_SUCCESS,
    user
  };
}
