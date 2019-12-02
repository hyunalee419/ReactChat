import * as React from 'react';
import * as moment from 'moment';
import styled from 'styled-components';
import ChatListItem from 'components/ChatListItem';

export default ({
  messages
}: {
	messages: {
		id: number, message: string, dateTime: moment.Moment, send?: boolean
	}[]
}) => (
	<Ul>
		{ messages && messages.map(({ id, message, send }) => (
			<ChatListItem key={`chatListItem-${id}`} send={send}>{message}</ChatListItem>
		))}
	</Ul>
);

const Ul = styled.ul`
  height: calc(100% - 59px);
  overflow-y: scroll;
`;
