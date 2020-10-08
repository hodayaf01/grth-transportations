/*
 *
 * LoginPage actions
 *
 */

import { DEFAULT_ACTION, IS_EXIST_USER, IS_EXIST_USER_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getIsExistUser(pass) {
  return {
    type: IS_EXIST_USER,
    pass,
  };
}

export function getIsExistUserSuccess(isExistUser) {
  return {
    type: IS_EXIST_USER_SUCCESS,
    isExistUser
  };
}
