import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddTrasportaionPageDomain = state => state.addTrasportaionPage || initialState;


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

