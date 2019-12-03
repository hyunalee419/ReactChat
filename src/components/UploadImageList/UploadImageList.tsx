import * as React from 'react';
import styled from 'styled-components';

export default ({ images }) => (
	<Div>
		<Ul>
		{ images && images.map((src, i) => (
			<li><Img src={src} alt={src} key={`upload-image-${i}`} /></li>
		))}
		</Ul>
	</Div>
);

const Div = styled.div`
  position: fixed;
	top: 44px;
	padding: 11px 16px;
	width: calc(100% - 32px);
	height: 46px;
	overflow-x: scroll;
	background-color: var(--color-purple);
`;

const Ul = styled.ul`
  display: flex;
`;

const Img = styled.img`
  margin-right: 10px;
  width: 46px;
  height: 46px;
  border-radius: 5px;
  background-color: #47909b;
`;