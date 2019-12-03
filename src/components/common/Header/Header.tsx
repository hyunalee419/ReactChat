import * as React from 'react';
import styled from 'styled-components';

export default ({
  title,
  left=undefined,
  right=undefined
}) => (
  <StyledDiv>
    {left}
    {title}
    {right}
  </StyledDiv>
);

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 44px;
  background-color: var(--color-purple);
  text-align: center;
  color: var(--color-white);
  font-size: 17px;
  font-weight: bold;
  line-height: 44px;
  letter-spacing: -0.12px;
`;
