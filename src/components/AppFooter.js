import React from 'react';
import { connect } from 'react-redux';
import { FlexContainer, Text } from './../components/common';

const AppFooter = props => {
    return (
        <FlexContainer
            justifyContent='center' alignItems='center' height='100%'
            backgroundColor='footer' boxShadow='0 2rem 10rem 0 rgba(0, 0, 0, 0.33)'
        >
            <Text fontSize='30rem' m='0' color='white'>Footer</Text>
        </FlexContainer>
    );
}

export default connect()(AppFooter);
