import { space, width, height, color } from 'styled-system';
import styled from 'styled-components';

export default styled.span`
    position: relative;
    &:before,
    &:after{
        content: "";
        position: absolute;
        background-color: white;
        transition: transform 0.25s ease-out;
    }
    /* Vertical line */
    &:before{
        top: 0;
        left: 50%;
        width: 2px;
        height: 100%;
        margin-left: -1px;
        ${color}
    }
    /* horizontal line */
    &:after{
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        margin-top: -1px;
        ${color}
    }
    ${space}
    ${height}
    ${width}
`