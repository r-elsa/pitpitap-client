import React from 'react';
import { connect } from 'react-redux';
import { FlexContainer, Text, SvgContainer } from '../common';


const AppFooter = () => {
    return (
        <FlexContainer
            justifyContent='space-between' alignItems='center' height='100%'
           
        >
            <FlexContainer alignItems='flex-start'>
                <FlexContainer flexDirection='column' alignItems='flex-start' ml='68rem'>
                  {/*   <Text fontSize='17rem' m='0' color='blue.2'>{'you have problem ?'}</Text> */}
                 {/*    <Text fontSize='23rem' fontWeight='600' m='5rem 0 0' color='blue.2' className='pointer'>1-000-000-000</Text> */}
                </FlexContainer>
            </FlexContainer>
            <FlexContainer flexDirection='column' alignItems='flex-end'>
               {/*  <Text fontSize='17rem' m='0' color='blue.2' className='pointer'>{'download app'}</Text> */}
               
               {/*  <FlexContainer >
                    <SvgContainer ml='30rem' mt='12rem'>
                        <GoogleIcon className='pointer'/>
                    </SvgContainer>
                    <SvgContainer mt='12rem'>
                        <AppleIconn className='pointer'/>
                    </SvgContainer>
                </FlexContainer> */}
            </FlexContainer>
        </FlexContainer>
    );
}

export default connect()(AppFooter);
