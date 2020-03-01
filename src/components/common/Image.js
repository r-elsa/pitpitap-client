import { space, height, background, borderRadius, position, top, left, zIndex, width} from 'styled-system';
import styled from 'styled-components';

export default styled.img`
  
  ${background}
  ${borderRadius}
  ${position}
  ${top}
  ${left}
  ${zIndex}
  ${width}



    &:hover {
        ${props => props.hover}
    }
    ${space}
    ${height}
 


    @media(max-width: 800px) {
    &.active{
    border-radius: 40rem;
    ${background}
    ${width}
    


}

 
  
`