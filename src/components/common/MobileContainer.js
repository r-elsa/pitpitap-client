import React from 'react';
import { space, layout, flexbox, colorStyle, color, border, shadow } from 'styled-system';
import styled from 'styled-components';

export default styled.div`
display: none;

${shadow}
${space}
${border}
${color}
${colorStyle}
${flexbox}
${layout}

@media(max-width: 800px) {
        display:flex;
        justify-content: flex-end;
    
   
}`







