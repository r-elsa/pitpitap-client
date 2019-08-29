import { space, width, height, color } from 'styled-system';
import styled from 'styled-components';

export default styled.div`
    display: block;
    position: absolute;
    z-index: 30;
    top: ${props => props.top};
    right: ${props => props.right};
    left: ${props => props.left};
    background-image: url(${props => props.backgroundImage});
    border-radius: 4rem;
    background-size: contain;
    background-repeat: no-repeat;
    overflow: hidden;
    transition:opacity 0.4s ease-in-out; 
    opacity: ${props => props.opacity}
    ${space}
    ${width}
    ${height}
    ${color}
`
