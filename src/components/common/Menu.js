import { space, width, height, color } from 'styled-system';
import styled from 'styled-components';

export default styled.div`
    display: block;
    position: fixed;
    z-index: 30;
    top: ${props => props.top};
    right: ${props => props.right};
    border-radius: 4rem;
    box-shadow: 0 2rem 10rem 0 rgba(0, 0, 0, 0.33);
    background-color: #ffffff;
    overflow: hidden;
    transition:height 0.3s ease-out; 
    ${space}
    ${width}
    ${height}
    ${color}
`
