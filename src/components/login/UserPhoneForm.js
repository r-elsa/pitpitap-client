import React, { useState, useEffect, useRef } from 'react';
import { Text, FlexContainer, Input, Button } from '../common';

// in this page the user have input for the phone and the 

const UserPhoneForm = props => {

    const [phoneNumber, setPhoneNumber] = useState('');
    let inputEl = useRef(null);

    useEffect(() => {
        const phoneInput = inputEl.current;
        phoneInput.focus();
        return () => {
            phoneInput.focus();
        }
    }, [])

    const handleLoginClick = (e) => {
        e.preventDefault();
        props.onLoginClick(phoneNumber)
    }

    return (
        <FlexContainer flexDirection='column'>
            <Text mt='120rem' mb='16rem' fontSize={'40rem'} color='yellow.1'>{'welocome'}</Text>
            <Text mb='50rem' fontSize={'25rem'} color='whites.1'>{''}</Text>
            <Text mb='16rem' fontSize={'20rem'} color='whites.1'>{'enter your phone number'}</Text>
            <form onSubmit={handleLoginClick} dir='ltr'>
                <Input
                    type='tel' textAlign='left' direction='rtl' padding='0 20rem'
                    mb={'60rem'} width='360rem' height='65rem'
                    fontSize='25rem' value={phoneNumber} ref={inputEl}
                    onChange={num => setPhoneNumber(num)} />
            </form>
            <Button
                width='270rem' height='60rem' type='submit'
                backgroundColor='yellow'
                onClick={handleLoginClick}
            >
                {'next'}
            </Button>
        </FlexContainer>
    );
}

export default UserPhoneForm;
