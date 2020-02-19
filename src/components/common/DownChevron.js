import { space, width, height, color } from 'styled-system';
import styled from 'styled-components';

export default styled.span`
position: absolute;
right: 0;
    ::before {
        border-style: solid;
        border-width: 0.25rem 0.25rem 0 0;
        content: '';
        z-index: 10;
        display: inline-block;
        cursor: pointer;
        height: 10rem;
        transform: rotate(-45deg);
        vertical-align: top;
        width: 10rem;
        top: 0;
        transform: rotate(135deg);
        ${width}
        ${height}
    }
    ${space}
    ${color}
`