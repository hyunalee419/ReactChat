import * as React from 'react';
import styled from 'styled-components';

export default ({
  children,
	send = false
}: {
	children: React.ReactNode,
	send?: boolean
}) => (
	<Li className={send ? 'send-message' : ''}><Text>{children}</Text></Li>
);

const Li = styled.li`
  &.send-message {
    text-align: right;
    
    div {
    	background-color: var(--color-purple);
    	bax-shadow: 0 2px 4px 0 rgba(91, 56, 177, 0.4);
    	color: var(--color-white);
    }
  }
`;

const Text = styled.div`
  margin: 5px 0;
  display: inline-block;
  padding: 12px;
	border-radius: 12px;
  background-color: var(--color-white);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  color: var(--color-charcoal-grey-two);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.1px;
`;
