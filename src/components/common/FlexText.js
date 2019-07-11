import React from 'react';
import { space, textStyle, flexbox, colorStyle, color, fontFamily, letterSpacing } from 'styled-system';
import styled from 'styled-components';

// This is the example of c styled component
export default styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    ${flexbox}
    ${space}
    ${fontFamily}
    ${letterSpacing}   
    ${color}
    ${colorStyle}
    ${textStyle}
`