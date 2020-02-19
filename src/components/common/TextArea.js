import React, { useState } from 'react';
import { space, width, fontSize, color, height, colorStyle, buttonStyle, borderRadius } from 'styled-system';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
font-size: 18rem;
font-weight: 300;
outline: none;
width: 885rem;
height: 112rem;
padding: 0;
text-indent: 5rem;
border-radius: 3rem;
border: solid 1px #0255a4;
background-color: #ffffff;
${color}
${space}
${fontSize}
${width}
${height}
${colorStyle}
`;

export default props => {
    const [active, setActive] = useState(false);
    
    const handleChange = e => {
        const { value } = e.target;
        if (value === '') {
            setActive(false);
        } else {
            setActive(true);
        }
        if (props.onChange) {
            props.onChange(value)
        }
    }


    return (
        <StyledTextArea {...props} onChange={handleChange} value={props.value} />
    )
}


