import React from 'react';
import FlexContainer from '../common/FlexContainer';
import styled from 'styled-components';


const StyledText = styled.p`
    font-family: ${props => props.fontFamily};
    font-size: 36rem;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    margin: 65rem 25rem;
    cursor: pointer;
    color: white;
    opacity: ${props => props.opacity};

    
@media(max-width: 1000px) {
    display: flex;
 

}`
   


const ItemUnderLine = styled.div`
    width: 85%;
    height: 1px;
    position: absolute;
    bottom: -32rem;
    background-color: white;
    margin-right:20rem;
        
/* @media(max-width: 1000px) {
    

} */
`

export default props => {


   /*  console.log(props.children.length) */
    return (
        <div flexdirection='column' height='100rem' ml='30rem' {...props} style={{ position: 'relative' }}>
            <StyledText fontWeight={props.active ? '1000' : '300'} fontFamily={props.active ? 'Rounded1c_Black': 'Rounded1c_Regular'}>{props.children}</StyledText>
           { <ItemUnderLine />} 
        </div>
    )
}




