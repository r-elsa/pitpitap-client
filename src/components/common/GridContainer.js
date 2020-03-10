import { grid, width,height, space, gridGap, gridTemplateColumns, background, gridTemplateRows, margin, padding, overflow } from 'styled-system';
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
    ${padding}
    ${overflow}

    &.scrollbar {
        min-width: 100%;
        overflow-x: auto;

        ::-webkit-scrollbar {
        display: none;
    }

  



    }

`;



