import React, {useState} from 'react';
import { space, width, fontSize, color, height, colorStyle, buttonStyle, borderRadius } from 'styled-system';
import styled from 'styled-components';

const StyledInput = styled.input`
font-size: 18rem;
font-weight: 300;
background-color: #fafafa;
color: #058bff;
border: none;
padding: 0;
text-indent: 5rem;
outline: none;
border-radius: 5px;
border: solid 2px transparent;
${color}
${space}
${fontSize}
${width}
${colorStyle}
`;

export default React.forwardRef((props, ref) => {
    const [active, setActive] = useState(false);

    // add active on focus
    const handleChange = e => {
        const { value } = e.target;
        // if (value === '') {
        //     setActive(false);
        // } else {
        //     setActive(true);
        // }
        if (props.onChange) {
            props.onChange(value)
        }
    }
    
    // const colorStyle = props.removeActive ? props.colors : active ? 'activeInput' : 'emptyInput';
    
    return (
        <StyledInput {...props} onChange={handleChange} ref={ref}/>
    )
})


