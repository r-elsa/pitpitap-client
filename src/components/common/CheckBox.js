import React from "react";
import { space, width, height, color, typography } from "styled-system";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28rem;
  height: 28rem;
  border-radius: 5rem;
  border: solid 2px #2f836c;
  background-color: #ffffff;
  margin: 0 10rem;
  cursor: pointer;
  ${space}
  ${color}
`;

const StyledSpan = styled.span`
  color: #2f836c;
  ${color}
  ${typography}
`;

export default props => {
  return props.checked ? (
    <StyledBox backgroundColor="lightGreen" {...props}>
      <StyledSpan color={props.color} fontSize={props.fontSize}>
        &#10003;
      </StyledSpan>
    </StyledBox>
  ) : (
    <StyledBox {...props} />
  );
};
