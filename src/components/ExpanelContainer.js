import styled from 'styled-components';
import { width, space, textStyle, colorStyle, color, typography, fontSize, fontFamily,padding} from 'styled-system';

export const ItemUnderLine = styled.div`
width: 100%;
height: 2px;
bottom: 0;
background-color: #54637a;
`

export const Question = styled.div`
display: flex;
${padding}


`

export const Answer = styled.div`

overflow:hidden;
max-height:0;
/* transition: max-height 0.6s ease; */
${padding}

&.answer{
    overflow:visible;
    max-height:100%;
}
`


export const Text = styled.p`
    text-align: right;
 
    margin: 0;
    ${fontFamily}
    color: #54637a;
    ${fontSize}
    ${width}
    ${space}
    ${typography}   
    ${color}
    ${colorStyle}
    ${textStyle}

    @media(max-width: 800px) {
    
      
  }
   
`