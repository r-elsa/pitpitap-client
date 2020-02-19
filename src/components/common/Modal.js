import React from 'react';
import { space } from 'styled-system';
import styled from 'styled-components';


export const Modal = styled.div`
width: 60vw;
height:80vh;
background: ${props => `url(${props.background})`};
background-size:cover;
background-repeat:no-repeat;
position: absolute;
border-radius: 2px;
transition: transform 0.2s ease;
text-align:right;
margin:10vh auto;
top:0%;
left:20vw;


&.show {
  display: block;
    
  }
  &.hide {
    display:none;
  

  }

@media(max-width: 1000px) {
    
}
`;



export const Button = styled.button`
background:transparent;
border:none;
padding: 15rem 20rem;
font-size:20em;




`;    
 
/*   
  .modal button {
    position: absolute;
    right: -1rem;
    top: -1rem;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 1px 1px 1px #0000003a;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.562);
  } */