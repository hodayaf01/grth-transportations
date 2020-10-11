
import produce from 'immer';
import { IS_EXIST_USER_SUCCESS, IS_EXIST_USER_GET_ERROR } from './constants';

export const initialState = {
  user: true,
};

const loginPageReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {

      case IS_EXIST_USER_SUCCESS:
        draft.user = action.user;
        if(draft.user!==false) {
          localStorage.setItem('userName', JSON.stringify(draft.user.name));
          window.open("/transportaionList", "_self");
        }
        else{alert("password is incorrect");}
        break;
      
      case IS_EXIST_USER_GET_ERROR:
        draft.isExistUser = action.isExistUser ;
        break;

      default:
        break;
    }
  });

export default loginPageReducer;
