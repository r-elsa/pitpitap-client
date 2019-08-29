import { width, space, color, fontFamily } from 'styled-system';
import styled from 'styled-components';

// This is the example of c styled component
export default styled.span`
    align-items: center;
    margin: 0;
    ${width}
    ${space}
    ${fontFamily}
    ${color}
`