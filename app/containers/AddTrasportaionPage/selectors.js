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

 const makeSelectNewTrasportationIdError = () =>
  createSelector(
    selectAddTrasportaionPageDomain,
    addTrasportaionPage => addTrasportaionPage.newTransportation.error,
  );

const makeSelectNewTrasportationId = () =>
  createSelector(
    selectAddTrasportaionPageDomain,
    addTrasportaionPage => addTrasportaionPage.newTransportation.id,
  );


export {
  makeSelectAddTrasportaionPage,
  makeSelectTrasportationNumber,
  makeSelectNewTrasportationId,
  makeSelectNewTrasportationIdError,
};
export { selectAddTrasportaionPageDomain };

