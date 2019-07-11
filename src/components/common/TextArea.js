import React, { useState } from 'react';
import { space, width, fontSize, color, height, colorStyle, buttonStyle, borderRadius } from 'styled-system';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
font-size: 18rem;
margin-top: 10rem;
font-weight: 300;
outline: none;
width: 885rem;
height: 112rem;
border-radius: 3rem;
border: solid 2rem #cbcbcb;
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


    const colorStyle = props.removeActive ? props.colors : active ? 'activeInput' : 'emptyInput';

    return (
        <StyledTextArea {...props} onChange={handleChange} colors={colorStyle} value={props.value} />
    )
}


