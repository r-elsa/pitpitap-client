import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../store/user/actions';
import CompanyCodeForm from './../components/login/CompanyCodeForm';
import UserPhoneForm from './../components/login/UserPhoneForm';
import ValidateCodeForm from './../components/login/ValidateCodeForm';

const Login = (props) => {

  const [phone, setPhone] = useState('');

  const handleLoginClick = (phoneNumber) => {
    props.sendCodetoPhone(phoneNumber);
    setPhone(phoneNumber);
  }

  const handleValidateCode = (code, onError) => {
    props.validateCode(phone, code, onError)
  }


  return (
    <div className="login-container">
      {!phone ? <UserPhoneForm
        onLoginClick={(num) => handleLoginClick(num)}
      /> :
        !props.clientId ? <ValidateCodeForm
          onSendCodeAgain={() => handleLoginClick(phone)}
          onBackClick={() => setPhone('')}
          onValidateCode={(code, onError) => handleValidateCode(code, onError)}
        /> :
          <CompanyCodeForm
            onBackClick={() => setPhone('')}
            onLoginClick={(code, onError) => props.addClientCode(code, onError)}
          />

      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    clientId: state.user.id
  }
};

const mapDispatchToProps = dispatch => ({
  sendCodetoPhone: phoneNumber => dispatch(userActions.sendCodeToUser(phoneNumber)),
  validateCode: (phoneNUmber, code, onError) => dispatch(userActions.validateCode(phoneNUmber, code, onError)),
  addClientCode: (code, onError) => dispatch(userActions.registerUser(code, onError)),
  loginUser: userData => dispatch(userActions.logIn(userData)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);
