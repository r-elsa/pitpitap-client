import React, { useState } from 'react';
import { Text, FlexContainer, Input, Button } from '../common';
import { ReactComponent as BackIcon } from './../../assets/images/ic-back.svg'
import AbsuloteContainer from '../common/AbsuloteContainer';

// TODO: need to be change into a second user form 
// here the user can put the data about him self or when he will need to provice more details for confirmation
// att the moment the user need to add some details about him self

const CompanyCodeForm = props => {

    const [code, setCode] = useState('');
    const [codeError, setCodeError] = useState(false);

    const handleBackClick = () => {
        props.onBackClick()
    }

    const handleCodeChange = (code) => {
        setCode(code);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLoginClick(code, (err) => {
            setCodeError(true);
        });
    }

    return (
        <FlexContainer flexDirection='column' className='relative'>
            <AbsuloteContainer top='40rem' right='40rem'>
                <BackIcon className='pointer' onClick={handleBackClick} />
            </AbsuloteContainer>
            <Text mt='120rem' mb='22rem' fontSize={'40rem'} color='yellow.1'>{'welcome'}</Text>
            <Text mb='90rem' fontSize={'20rem'} color='whites.1' mb='20rem' fontWeight='600'>{'you got code'}</Text>
            <form onSubmit={handleSubmit}>
                <Input
                    textAlign='left' direction='rtl' padding='0 20rem'
                    mb={'10rem'} width='200rem' height='65rem'
                    colors={codeError ? 'errorInput' : ''}
                    fontSize='25rem' value={code}
                    onChange={code => handleCodeChange(code)}
                />
            </form>
            <Text 
            color='yellow.2' border='1px solid' mt='20rem' fontSize='15rem'
            className='pointer' onClick={props.onSendCodeAgain}
            >
                {'whats company code'}
            </Text>
            <Button
                width='270rem' height='60rem' mt='10rem'
                backgroundColor='yellow'
                onClick={handleSubmit} type='submit'
            >
                {'connect'}
            </Button>
        </FlexContainer>
    );
}

export default CompanyCodeForm;
