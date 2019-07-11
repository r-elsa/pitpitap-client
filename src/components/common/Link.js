import React from 'react';
import { space, textStyle, fontSize, colorStyle, color, fontFamily, letterSpacing } from 'styled-system';
import styled from 'styled-components';

// This is the example of c styled component
export default styled.p`
    text-decoration: underline;
    ${color}
    ${textStyle}
    ${colorStyle}
    ${space}
`