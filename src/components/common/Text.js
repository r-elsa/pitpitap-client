import { width, space, textStyle, colorStyle, color, fontFamily, letterSpacing } from 'styled-system';
import styled from 'styled-components';

// This is the example of c styled component
export default styled.p`
    align-items: center;
    ${width}
    ${space}
    ${fontFamily}
    ${letterSpacing}   
    ${color}
    ${colorStyle}
    ${textStyle}
`