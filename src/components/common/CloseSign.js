import { space, width, height, color } from 'styled-system';
import styled from 'styled-components';

export default styled.span`
position: absolute;
right: 0;
top: 0;
${space}
${height}
${width}
opacity: 1;
&:hover {
  opacity: 0.3;
}
&:before {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
  transform: rotate(45deg);
  ${color}
}
&:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
  transform: rotate(-45deg);
  ${color}
}
`