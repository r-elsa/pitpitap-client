import React, {useState} from 'react';
import { space, width, fontSize, color, height, colorStyle, buttonStyle, borderRadius } from 'styled-system';
import styled from 'styled-components';

const StyledInput = styled.input`
font-size: 18rem;
margin-top: 10rem;
font-weight: 300;
color: grey;
border: none;
padding: 2rem;
outline: none;
border-bottom: solid 1rem grey;
${color}
${space}
${fontSize}
${width}
${colorStyle}
`;

export default props => {
    const [active, setActive] = useState(false);

    // add active on focus
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
        <StyledInput {...props} onChange={handleChange} colors={colorStyle}/>
    )
}


