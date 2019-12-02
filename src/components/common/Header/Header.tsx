import * as React from 'react';
import styled from 'styled-components';
import ImgButton from 'components/common/ImgButton';

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

export default ({
  title,
  left=undefined,
  right=undefined
}) => (
  <StyledDiv>
    <ImgButton
      buttonProps={{ style: { float: 'left', padding: '12px 0 0 10px' } }}
      imgProps={{ src: '/menu@3x.png', style: { width: 24, height: 24 } }}
    />
    {title}
    <ImgButton
      buttonProps={{ style: { float: 'right', padding: '10px 12px' } }}
      imgProps={{ src: '/profile@3x.png', style: { width: 24, height: 24 } }}
    />
  </StyledDiv>
);
