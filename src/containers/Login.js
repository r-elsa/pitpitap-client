import React, { useState } from 'react';
import { FlexContainer, FlexText, Text } from './../components/common';
import LoginForm from './../components/login/LoginForm';
import SignupForm from '../components/login/SignupForm';

const Login = () => {

  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="login-container">
      <FlexContainer height='100%' width='100%' flexDirection='column'>
        {showRegister ? <SignupForm /> : <LoginForm />}
        <FlexText mt='0' fontSize={'16rem'} fontFamily='raleway'>
          {`${showRegister ? 'Dont have Account ?' : 'Already have an account?'}`}
          <Text ml='4rem' color='green' textStyle='clickable' onClick={() => setShowRegister(!showRegister)}>
            {`${showRegister ? 'Sign up.' : 'Sign in.'}`}
          </Text>
        </FlexText>
      </FlexContainer>
    </div>
  );
}

export default Login;
