
import produce from 'immer';
import { IS_EXIST_USER_SUCCESS, IS_EXIST_USER_GET_ERROR } from './constants';

export const initialState = {
  isExistUser: false,
  userName: '',
};

const loginPageReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {

      case IS_EXIST_USER_SUCCESS:
        draft.isExistUser = action.isExistUser ? true : false;
        draft.userName = "Hodaya";
        break;
      
      case IS_EXIST_USER_GET_ERROR:
        draft.isExistUser = action.isExistUser ;
        break;

      default:
        break;
    }
  });

export default loginPageReducer;
