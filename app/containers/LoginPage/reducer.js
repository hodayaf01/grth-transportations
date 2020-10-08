
import produce from 'immer';
import { IS_EXIST_USER, IS_EXIST_USER_SUCCESS } from './constants';

export const initialState = {
  isExistUser: false,
  pass: '',
};

const loginPageReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {
      case IS_EXIST_USER:

        draft.pass= action.pass;
        break;
      case IS_EXIST_USER_SUCCESS:

        draft.isExistUser = action.isExistUser;
        break;
      default:
        break;
    }
  });

export default loginPageReducer;
