/**
 *
 * TrasportationListPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';
import messages from './messages';

export function TrasportationListPage() {
  useInjectSaga({ key: 'trasportationListPage', saga });

  return (
    <div>
      <Helmet>
        <title>TrasportationListPage</title>
        <meta
          name="description"
          content="Description of TrasportationListPage"
        />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

TrasportationListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TrasportationListPage);
