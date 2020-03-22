import {
  space,
  width,
  fontSize,
  color,
  colorStyle,
  buttonStyle,
  borderRadius
} from "styled-system";
import styled from "styled-components";

export default styled.button`
margin: 10rem;
font-size: 18rem;
font-family: "RoundedMplus1c";
font-weight: 300;
border-radius: 5rem;
border: none;
cursor: pointer;
outline: none;

${space}
${width} 
${color}
${fontSize}
${borderRadius}
${colorStyle}
${buttonStyle}
`;
