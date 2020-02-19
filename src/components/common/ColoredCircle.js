import styled from 'styled-components';

export default styled.div`
height: 20rem;
width: 20rem;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size: 12rem;
font-family: Assistant;
font-weight: 600;
margin-right: 10rem;
color: ${props => props.color};
background-color: ${props => props.backgroundColor};
opacity: ${props => props.opacity};
`