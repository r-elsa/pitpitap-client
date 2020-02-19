import styled from 'styled-components'
import css from'styled-components'

export const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;
  margin:auto ;
 
  
`;

export const NavigationItem = styled.li`
  list-style: none;
  margin: 1vh;
  width: 7px;
  height: 7px;
  margin: 0 3px;
  border: solid 1px #54637a;
  border-radius: 100%;

  &.active {
    background: #54637a;
  }

`;
export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns:1fr 3fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    grid-gap: 0%;
    height:20vh;
 /*    direction: ltr; */
    margin-top:70rem;
  


`;

export const SlideContainer = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    vertical-align:center;
    
   

`;

export const Slide = styled.div`
    position:absolute;
    top:0;
    opacity:0;
    transition: .3s ease;
    margin:auto ;
    padding:0rem 30rem 0rem 30rem;

    &.active {
        position:absolute;
        top:0;
        opacity:1;
        transition: .5s ease;
  }
`;

export const Button = styled.button`
    border:none;
    background:transparent;
   

    &.right{
      
    }

    &.left{
      left:0;


    }

    &:hover{
      
    }

`;


export const Reversediv = styled.div`
    direction: ltr;

`;



