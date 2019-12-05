import * as React from 'react';
import styled from 'styled-components';

export default () => {
	const handleDrag = (e) => {
		e.dataTransfer.setData(
			'mcEventData',
			e.target.src
		);
	}

	return (
		<Div>
			<Ul>
				<li><Img src="/uploads/2019-08-13-4-57-53@3x.png" draggable={true} onDragStart={handleDrag} /></li>
				<li><Img src="/uploads/2019-08-13-4-57-56@3x.png" draggable={true} onDragStart={handleDrag} /></li>
				<li><Img src="/uploads/img-shot-1@3x.png" draggable={true} onDragStart={handleDrag} /></li>
			</Ul>
		</Div>
	);
}

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