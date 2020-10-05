import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectAddTrasportaionPage, makeSelectTrasportationNumber} from './selectors';
import { changetransportationNumber } from './actions';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AddTrasportaionPage(
  {
    trasportationNumber,
    transportationNumberChange
  }
) {

  const [customerName, setcustomerName] = useState('');

  useInjectReducer({ key: 'addTrasportaionPage', reducer });
  useInjectSaga({ key: 'addTrasportaionPage', saga });

  const onCustomerNameChanged = (event) => {
    setcustomerName(event.target.value);
  };

  const onTransportationNumberChanged = (event) => {
    transportationNumberChange(event.target.value);
  };

  useEffect(() => {
    // when initianl state trasportation number is not null 
    setcustomerName('customer name');
  });

  return (
    <div>
      <Helmet>
        <title>AddTrasportaionPage</title>
        <meta name="description" content="Description of AddTrasportaionPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <input value={trasportationNumber} onChange={onTransportationNumberChanged} ></input>
      <input value={customerName} onChange={onCustomerNameChanged}></input>
    </div>
  );
}

AddTrasportaionPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  trasportationNumber: PropTypes.string,
  transportationNumberChange: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  addTrasportaionPage: makeSelectAddTrasportaionPage(),
  trasportationNumber: makeSelectTrasportationNumber(),
});

function mapDispatchToProps(dispatch) {
  return {
    transportationNumberChange: (number) =>{
      dispatch(changetransportationNumber(number))
    },
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
