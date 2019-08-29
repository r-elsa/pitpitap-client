import { width, space, textStyle, colorStyle, color, typography } from 'styled-system';
import styled from 'styled-components';

export default styled.p`
    align-items: center;
    margin: 0;
    font-size: 10rem;
    ${width}
    ${space}
    ${typography}   
    ${color}
    ${colorStyle}
    ${textStyle}
`