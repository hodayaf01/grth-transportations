import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addTrasportaionPage state domain
 */

const selectAddTrasportaionPageDomain = state => state.addTrasportaionPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddTrasportaionPage
 */

const makeSelectAddTrasportaionPage = () =>
  createSelector(
    selectAddTrasportaionPageDomain,
    substate => substate,
  );

const makeSelectTrasportationNumber = () =>
  createSelector(
    selectAddTrasportaionPageDomain,
    addTrasportaionPage => addTrasportaionPage.transportationNumber,
  );

export {
  makeSelectAddTrasportaionPage,
  makeSelectTrasportationNumber,
};
export { selectAddTrasportaionPageDomain };

