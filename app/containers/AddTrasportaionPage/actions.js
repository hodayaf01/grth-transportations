import { DEFAULT_ACTION, CHANGE_TRANSPORTATION_NUMBER, GET_NEW_TRANSPORTATION_ID, GET_NEW_TRANSPORTATION_ID_SUCCESS, GET_NEW_TRANSPORTATION_ID_ERROR } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
};

export function changetransportationNumber(number) {
  return {
    type: CHANGE_TRANSPORTATION_NUMBER,
    number
  };
};

export function getNewTransportationId(){
  return {
    type: GET_NEW_TRANSPORTATION_ID,
  };
};

export function getNewTransportationIdSuccess(newId){
  return {
    type: GET_NEW_TRANSPORTATION_ID_SUCCESS,   
    newId 
  };
};

export function getNewTransportationIdError(error){
  return {
    type: GET_NEW_TRANSPORTATION_ID_ERROR,   
    error 
  };
};
