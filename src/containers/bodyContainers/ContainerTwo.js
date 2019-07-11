import React from 'react';
import { connect } from 'react-redux';
import { Card, FlexContainer, Text } from '../../components/common';

const ContainerTwo = props => {
    return (
        <FlexContainer>
            <Card backgroundColor='blue' height='500rem' width='500rem'>
                <Text mt='100rem' color='whites.1' fontSize='40rem'>This is two</Text>
            </Card>
        </FlexContainer>
    );
}


export default connect()(ContainerTwo);
