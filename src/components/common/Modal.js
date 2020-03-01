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

@media(max-width: 800px) {
  width: 100vw;
  height:100vh;
  background-size:contain;
  background-repeat:no-repeat;
  position: absolute;
  transition: transform 0.2s ease;
  text-align:right;
  left:0;
  top:25%;


}
`;



export const Button = styled.button`
background:transparent;
border:none;
padding: 15rem 20rem;
font-size:20em;


@media(max-width: 800px) {
  color:rgb(255, 255, 255);
  font-size:27em;

}




`;    
 
