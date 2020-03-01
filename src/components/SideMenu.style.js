

import styled from 'styled-components';

export const SideMenuContainer = styled.div`

@media(max-width: 800px) {
  
  
  width: 60vw;
  height: 100%;
  background: #54637a;
  transition: all 0.3s linear; 
  transform-origin: 1px;
  top:0;
  right:0;
  position:fixed;
  color:white;
  z-index:1000;

 
&.open {
  display:block;
  
}
&.closed {
  display:none;


}
 
}

`


