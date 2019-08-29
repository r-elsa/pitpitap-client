import { space, height } from 'styled-system';
import styled from 'styled-components';

export default styled.img`
    &:hover {
        ${props => props.hover}
    }
    ${space}
    ${height}
`