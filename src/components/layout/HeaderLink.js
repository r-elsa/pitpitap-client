import React from 'react';
import FlexContainer from '../common/FlexContainer';
import styled from 'styled-components';


export const StyledText = styled.p`
  font-family: ${props => props.fontFamily};
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  font-size: 20rem;   
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #54637a;
    cursor: pointer;
    opacity: ${props => props.opacity};
`

export const ItemUnderLine = styled.div`
    width: 87rem;
    height: 4px;
    position: absolute;
    bottom: 0;
    background-color: #54637a;
`

export default props => {
    return (
        <FlexContainer flexDirection='column' height='52rem' ml='65rem' {...props} style={{ position: 'relative' }}>
            <StyledText fontFamily={props.active ? 'Rounded1c_Black': 'Rounded1c_Regular'}>{props.children}</StyledText>
            {props.active ? <ItemUnderLine /> : null}
        </FlexContainer>
    )
}


