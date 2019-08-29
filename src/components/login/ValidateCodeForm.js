import React, { useState, useRef, useEffect } from 'react';
import { Text, FlexContainer, Input } from '../common';
import { ReactComponent as BackIcon } from './../../assets/images/ic-back.svg'
import AbsuloteContainer from '../common/AbsuloteContainer';

// In this page the user is putting the confirmation code he got on the phone. do not need to touch that

const ValidateCodeForm = props => {

    const [code, setCode] = useState('');
    const [codeError, setCodeError] = useState(false);
    const inputEl = useRef(null);

    useEffect(() => {
        inputEl.current.focus();

    }, [])

    const handleBackClick = () => {
        props.onBackClick()
    }

    const handleCodeChange = (code) => {
        if (codeError) {
            setCodeError(false);
        }
        setCode(code);
        if (code.length === 4) {
            props.onValidateCode(code, (err) => {
                setCodeError(true);
            })
        }
    }

    return (
        <FlexContainer flexDirection='column' className='relative'>
            <AbsuloteContainer top='40rem' right='40rem'>
                <BackIcon className='pointer' onClick={handleBackClick} />
            </AbsuloteContainer>
            <Text mt='120rem' mb='22rem' fontSize={'40rem'} color='yellow.1'>{'welcome'}</Text>
            <Text mb='90rem' fontSize={'20rem'} color='whites.1' fontWeight='600'>{'enter your code'}</Text>
            <Input
                type='tel' textAlign='left' direction='rtl' padding='0 20rem'
                mb={'10rem'} width='200rem' height='65rem'
                colors={codeError ? 'errorInput' : ''} maxlength='4'
                fontSize='25rem' value={code} ref={inputEl}
                onChange={code => handleCodeChange(code)}
            />
            <Text
                color='yellow.2' border='1px solid' fontSize='15rem'
                className='pointer' onClick={props.onSendCodeAgain}
            >
                {'I did not get the code'}
            </Text>
        </FlexContainer>
    );
}

export default ValidateCodeForm;
