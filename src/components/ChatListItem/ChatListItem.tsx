import * as React from 'react';
import styled from 'styled-components';

export default ({
  children,
	image = false,
	send = false
}: {
	children: any,
	image?: boolean,
	send?: boolean
}) => (
	<Li className={send ? 'send-message' : ''}>
		{ image ? (
			<img src={children} />
		) : (
			<Text>{children}</Text>
		)}
	</Li>
);

const Li = styled.li`
	padding: 5px 0;
	
	img {
	  width: 200px;
		height: 200px;
		border-radius: 12px;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
		background-color: #47909b;
	}
    
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
