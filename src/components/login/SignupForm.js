import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box, Text, FlexText, FlexContainer, Input, Button, Link } from '../common';
import { userActions } from '../../store/user/actions'

const SignupForm = props => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginClick = () => {
    if (password === confirmPassword) {
      props.signupUser({ email, password })
    }
  }

  return (
    <Box p={[20, 50]} height='500rem' width='680rem'>
      <FlexContainer flexDirection='column'>
        <Text m={2} fontSize={'24rem'} fontFamily='heebo'>Create Your Account</Text>
        <Input
          placeholder='Work email' width='457rem' mt={'50rem'}
          onChange={email => setEmail(email)} />
        <Input
          type='password' placeholder='Write Your Password' mt={'50rem'} width='457rem'
          onChange={pass => setPassword(pass)}
        />
        <Input
          type='password' placeholder='Re-Write Your Password' mt={'50rem'} width='457rem'
          onChange={pass => setConfirmPassword(pass)}
        />
        <Button
          variant='login' mt='50rem'
          onClick={handleLoginClick}
        >
          Create My Acount
        </Button>
        <FlexText mb='0' fontSize={'14rem'} fontFamily='heebo' colors='activeInput'>
          By signing up you agree to the
                        <Link mr='4rem' ml='4rem' textStyle='clickable'>terms of service</Link> and
                        <Link mr='4rem' ml='4rem' textStyle='clickable'>privacy policy</Link>.
                    </FlexText>
      </FlexContainer>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = dispatch => ({
  signupUser: userData => dispatch(userActions.signUp(userData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
