import React from 'react';
import FlexContainer from '../common/FlexContainer';
import styled from 'styled-components';

const StyledText = styled.p`
    font-family: Assistant;
    font-size: 17rem;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #0255a4;
    margin: 0 26rem;
    cursor: pointer;
    opacity: ${props => props.opacity}
`

export const ItemUnderLine = styled.div`
    width: 87rem;
    height: 4px;
    position: absolute;
    bottom: 0;
    background-color: #0255a4;
`

export default props => {
    return (
        <FlexContainer flexDirection='column' height='70rem' ml='30rem' {...props} style={{ position: 'relative' }}>
            <StyledText color={props.active ? 'blue.2' : 'grey'}>{props.children}</StyledText>
            {props.active ? <ItemUnderLine /> : null}
        </FlexContainer>
    )
}


