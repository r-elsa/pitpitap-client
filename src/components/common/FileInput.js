import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
width: 0.1px;
height: 0.1px;
opacity: 0;
overflow: hidden;
position: absolute;
z-index: -1;
`;

export default React.forwardRef((props, ref) => {

    // add active on focus
    const handleChange = e => {
        const { value } = e.target;
        if (props.onChange) {
            props.onChange(value)
        }
    }

    return (
        <StyledInput {...props} type='file' onChange={handleChange} ref={ref} />
    )
})


