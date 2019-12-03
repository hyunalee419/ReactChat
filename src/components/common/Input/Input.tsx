import * as React from 'react';
import styled from "styled-components";

export default ({ ...props }) => <Input {...props} />;

const Input = styled.input`
  padding: 17px 16px;
  border: none;
	border-radius: 25px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: var(--color-white);
  outline: none;
  font-size: 14px;
	letter-spacing: -0.12px;
	font-weight: 500;
  
  &:placeholder {
  	color: #74747e;
  	opacity: 0.6;
  }
`;
