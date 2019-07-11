import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box, Text, FlexText, FlexContainer, Input, Button, Link } from '../common';
import { userActions } from '../../store/user/actions'

const LoginForm = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
        props.loginUser({ email, password })
    }

    return (
        <Box p={[20, 50]} height='500rem' width='680rem'>
            <FlexContainer flexDirection='column'>
                <Text m={2} fontSize={'24rem'} fontFamily='heebo'>Log In To Your Account</Text>
                <Input
                    type='text' placeholder='Write your work email'
                    mt={'50rem'} width='457rem'
                    value={email}
                    onChange={email => setEmail(email)} />
                <Input
                    type='password' placeholder='Type "123" '
                    mt={'50rem'} width='457rem'
                    value={password}
                    onChange={pass => setPassword(pass)}
                />
                <Button
                    variant='login' mt='50rem'
                    onClick={handleLoginClick}
                >
                    Log In
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
    loginUser: userData => dispatch(userActions.logIn(userData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
