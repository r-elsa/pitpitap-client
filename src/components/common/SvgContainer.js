import { width, height, space, textStyle, color } from 'styled-system';
import styled from 'styled-components';

// This is the example of c styled component
export default styled.div`
    position: relative;
    svg {    
        align-items: center;
        margin: 0;
        path {
            fill: ${props => props.fillColor};
        }
        &:hover {
            path {
                fill: ${props => props.hoverColor};
            }
        }
        ${width}
        ${height}
        ${space}
        ${color}
        ${textStyle}
    }
`