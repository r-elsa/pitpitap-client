import { grid, width,height, space, gridGap, gridTemplateColumns, background, gridTemplateRows, margin } from 'styled-system';
import styled from 'styled-components';

export default styled.div`
    display: grid;
    ${space}
    ${width}
    ${grid}
    ${gridTemplateColumns}
    ${gridTemplateRows}
    ${gridGap}
    ${margin}
    ${background}
    ${height}

@media(max-width: 1000px) {
    display: grid;
    grid-template-columns:repeat(1, 1fr);
    grid-template-rows: 3fr 1fr 1fr;
    grid-gap: 5%;
    margin:auto ;
    width:50vw ;
    height:30vh;
   
}`;



