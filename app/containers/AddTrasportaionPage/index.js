import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import AddTransportationForm from '../../components/AddTransportationForm';
import { changetransportationNumber, getNewTransportationId } from './actions';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { makeSelectNewTrasportationIdError, makeSelectNewTrasportationId, makeSelectAddTrasportaionPage, makeSelectTrasportationNumber} from './selectors';

export function AddTrasportaionPage(
  {
    trasportationNumber,
    transportationNumberChange,
    onLoadAddTransportation,
    error,
    newId,
  }
) {

  useInjectReducer({ key: 'addTrasportaionPage', reducer });
  useInjectSaga({ key: 'addTrasportaionPage', saga });

  const stransportationFormRef = React.createRef();

  const onTransportationNumberChanged = (event) => {
    transportationNumberChange(event.target.value);
  };

  useEffect(() => {
    // need to find the last number of order for the next one
    onLoadAddTransportation();
    // when initianl state trasportation number is not null 
    // setcustomerName('customer name');
  });

  const onSubmitForm = () => {
    debugger;
    const form = stransportationFormRef.current;
    // const formState = form.state.customerId;
    console.log(form.state);
  };

  return (
    <div>
      <Helmet>
        <title>AddTrasportaionPage</title>
        <meta name="description" content="Description of AddTrasportaionPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <input value={trasportationNumber} onChange={onTransportationNumberChanged} ></input> <br/>
      {/* <input value={customerName} onChange={onCustomerNameChanged}></input><br/> */}

      {error && <div className="error">error accured</div>}

      <AddTransportationForm newId={newId} ref={stransportationFormRef} />
      <button type='button' onClick={onSubmitForm}>test1</button>
      <h1>{newId}</h1>
    </div>
  );
}

AddTrasportaionPage.propTypes = {
  trasportationNumber: PropTypes.string,
  transportationNumberChange: PropTypes.func,
  onLoadAddTransportation: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  newId: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  addTrasportaionPage: makeSelectAddTrasportaionPage(),
  trasportationNumber: makeSelectTrasportationNumber(),
  error: makeSelectNewTrasportationIdError(),
  newId: makeSelectNewTrasportationId(),
});

function mapDispatchToProps(dispatch) {
  return {
    transportationNumberChange: (number) =>{
      dispatch(changetransportationNumber(number))
    },
    onLoadAddTransportation: () =>dispatch(getNewTransportationId()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddTrasportaionPage);
