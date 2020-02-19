import { space, width, height, color } from 'styled-system';
import styled from 'styled-components';

export default styled.span`
position: absolute;
right: 0;
    ::before {
        border-style: solid;
        border-width: 0.25rem 0.25rem 0 0;
        z-index: 10;
        content: '';
        display: inline-block;
        height: 10rem;
        transform: rotate(-45deg);
        vertical-align: top;
        width: 10rem;
        left: 0;
        transform: rotate(45deg);
        ${width}
        ${height}
    }
    ${space}
    ${color}
`