import React from 'react';
import { space, width, height, color } from 'styled-system';
import styled from 'styled-components';

// This is the example of styled component
export default styled.div`
    width: 680em;
    height: 680em;
    border-radius: 6em;
    box-shadow: 0 2em 18em 0 rgba(0, 0, 0, 0.33);
    background-color: #ffffff;
    ${space}
    ${width}
    ${height}
    ${color}
`
