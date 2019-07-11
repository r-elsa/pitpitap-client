import React from 'react';
import { connect } from 'react-redux';
import { Card, FlexContainer, Text } from '../../components/common';

const ContainerThree = props => {
    return (
        <FlexContainer >
            <Card backgroundColor='blue' height='500rem' width='500rem'>
                <Text mt='200rem' color='whites.2' fontSize='30rem'>This is Three</Text>
            </Card>
        </FlexContainer>
    );
}


export default connect()(ContainerThree);
