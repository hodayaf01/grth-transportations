/*
 *
 * AddTrasportaionPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, CHANGE_TRANSPORTATION_NUMBER } from './constants';

export const initialState = {
  transportationNumber: '',
};

/* eslint-disable default-case, no-param-reassign */
const addTrasportaionPageReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {

      case DEFAULT_ACTION:
        break;

      case CHANGE_TRANSPORTATION_NUMBER:
        draft.transportationNumber = action.number;
    }
  });

export default addTrasportaionPageReducer;
