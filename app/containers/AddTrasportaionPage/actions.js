import { 
  DEFAULT_ACTION, 
  GET_NEW_TRANSPORTATION_ID, 
  GET_NEW_TRANSPORTATION_ID_SUCCESS, 
  GET_NEW_TRANSPORTATION_ID_ERROR, 
  ADD_NEW_TRANSPORTATION,
  ADD_NEW_TRANSPORTATION_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
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

export function addNewTransportation(newTransportation){
  return {
    type: ADD_NEW_TRANSPORTATION,   
    newTransportation 
  };
};

export function addNewTransportationSuccess(newTransportation){
  return {
    type: ADD_NEW_TRANSPORTATION_SUCCESS,   
    newTransportation 
  };
};
