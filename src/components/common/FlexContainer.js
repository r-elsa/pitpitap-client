import React from 'react';
import { space, layout, flexbox, colorStyle, color, border, shadow } from 'styled-system';
import styled from 'styled-components';

export default styled.div`
display: flex;
align-items: center;
justify-content: center;
${shadow}
${space}
${border}
${color}
${colorStyle}
${flexbox}
${layout}
`;
