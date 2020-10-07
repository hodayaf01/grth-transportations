import produce from 'immer';
import { DEFAULT_ACTION, CHANGE_TRANSPORTATION_NUMBER, GET_NEW_TRANSPORTATION_ID, GET_NEW_TRANSPORTATION_ID_SUCCESS, GET_NEW_TRANSPORTATION_ID_ERROR } from './constants';

export const initialState = {
  transportationNumber: '',
  newTransportation:{
    id: 0,
    error: false,
    customerId: '',
    name:'',
    address:'',
    fromLatitude:'',
    fromLongitude:'',
    toLatitude:'',
    toLongitude:'',
    isArrived: false,
  }
};

const addTrasportaionPageReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {

      case DEFAULT_ACTION:
        break;

      case CHANGE_TRANSPORTATION_NUMBER:
        draft.transportationNumber = action.number;
        break;
      
      case GET_NEW_TRANSPORTATION_ID:
        draft.newTransportation.error = false;
        break;
      
      case GET_NEW_TRANSPORTATION_ID_SUCCESS:
        draft.newTransportation.id = action.newId;
        draft.newTransportation.error = false;
        break;
            
      case GET_NEW_TRANSPORTATION_ID_ERROR:
        draft.newTransportation.id = 0;
        draft.newTransportation.error = true;
        break;

      default:
        break;
    }
  });

export default addTrasportaionPageReducer;
