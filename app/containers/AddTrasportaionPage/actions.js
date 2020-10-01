/*
 *
 * AddTrasportaionPage actions
 *
 */

import { DEFAULT_ACTION, CHANGE_TRANSPORTATION_NUMBER } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changetransportationNumber(number) {
  return {
    type: CHANGE_TRANSPORTATION_NUMBER,
    number
  };
}
