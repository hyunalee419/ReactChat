import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 44px;
  background-color: var(--color-purple);
`;

export default ({
  title,
  left=undefined,
  right=undefined
}) => (
  <StyledDiv>
    <div style={{ float: 'left', padding: '12px 0 0 10px'}}>left</div>
    {title}
    <div style={{ float: 'right', padding: '10px 12px' }}>right</div>
  </StyledDiv>
);
