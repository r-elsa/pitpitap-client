import { space, width, height, color } from "styled-system";
import styled from "styled-components";

export default styled.div`
    display: block;
    position: absolute;
    top: ${props => props.top};
    right: ${props => props.right};
    left: ${props => props.left};
    bottom: ${props => props.bottom};
    ${space}
    ${width}
    ${height}
    ${color}
`;
