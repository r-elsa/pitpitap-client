import React from 'react';
import { connect } from 'react-redux';
import { Card, FlexContainer, Text } from '../../components/common';

const ContainerOne = props => {
    return (
        <FlexContainer >
            <Card backgroundColor='blue' height='500rem' width='500rem'>
                <Text mt='50rem' color='whites.0' fontSize='50rem'>This is one</Text>
            </Card>
        </FlexContainer>

    );
}

export default connect()(ContainerOne);
