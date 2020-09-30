import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addTrasportaionPage state domain
 */

const selectAddTrasportaionPageDomain = state =>
  state.addTrasportaionPage || initialState;

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

export default makeSelectAddTrasportaionPage;
export { selectAddTrasportaionPageDomain };
