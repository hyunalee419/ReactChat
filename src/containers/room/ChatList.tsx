import * as React from 'react';
import * as moment from 'moment';
import styled from 'styled-components';
import ChatListItem from 'components/ChatListItem';

export default ({
  messages
}: {
	messages: {
		id: number, message?: string, image?: any, dateTime: moment.Moment, send?: boolean
	}[]
}) => {
	const test = React.useRef(null);
	React.useEffect(() => {
		test.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}, [messages]);

	return (
		<Ul ref={el => test.current = el}>
			{ messages && messages.map(({ id, message, image, send }) => (
				<ChatListItem key={`chatListItem-${id}`} image={!!image} send={send}>{image || message}</ChatListItem>
			))}
		</Ul>
	);
}

const Ul = styled.ul`
  height: calc(100% - 59px);
  overflow-y: scroll;
`;
