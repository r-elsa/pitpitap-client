import { space, width, height, color, flexbox } from 'styled-system';
import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 6rem;
    box-shadow: 0 2rem 18rem 0 rgba(0, 0, 0, 0.33);
    background-color: #ffffff;
    ${space}
    ${width}
    ${height}
    ${flexbox}
    ${color}
`

