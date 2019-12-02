import * as React from 'react';
import styled from 'styled-components';
import ChatListItem from 'components/ChatListItem';

export default () => (
	<Ul>
		<ChatListItem>출근했니?</ChatListItem>
		<ChatListItem>출근했냐구?</ChatListItem>
		<ChatListItem>어딘데 출근안하니, 죽고싶니?</ChatListItem>
		<ChatListItem send>해외 출장중입니다.</ChatListItem>
	</Ul>
);

const Ul = styled.ul`
  height: calc(100% - 59px);
  overflow-y: scroll;
`;
