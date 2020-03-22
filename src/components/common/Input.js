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


    const handleChange = e => {
        const { value } = e.target;

        if (props.onChange) {
            props.onChange(value)
        }
    }
    

    
    return (
        <StyledInput {...props} onChange={handleChange} ref={ref}/>
    )
})


