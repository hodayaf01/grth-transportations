
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectIsExistUser} from './selectors';
import {getIsExistUser} from './actions';
import reducer from './reducer';
import saga from './saga';

export function LoginPage({onSubmitConfirmPass, isExistUser}) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  const [pass, setpass] = useState('');

  const onChangePass = (event) => {
    setpass(event.target.value);
  };

  const onConfirm = () => {
    onSubmitConfirmPass(pass);
  };

  return (
    <div>
      <h1>enter your password</h1>
      <input type="text" value={pass} onChange={onChangePass}></input>
      <button type="submit" onClick={onConfirm}>confirm</button>
      <span>{isExistUser}</span>
    </div>
  );
}

LoginPage.propTypes = {
  isExistUser: PropTypes.bool,
  onSubmitConfirmPass: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isExistUser: makeSelectIsExistUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitConfirmPass:(pass) => {console.log(pass); dispatch(getIsExistUser(pass))},
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
