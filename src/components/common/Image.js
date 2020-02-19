import { space, height } from 'styled-system';
import styled from 'styled-components';

export default styled.img`
    &:hover {
        ${props => props.hover}
    }
    ${space}
    ${height}



    @media(max-width: 900px) {
    width:25vw ;
    margin:auto;
   
   
   
}
`