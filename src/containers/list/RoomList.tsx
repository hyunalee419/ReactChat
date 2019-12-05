import * as React from 'react';
import styled from 'styled-components';
import RoomListItem from 'components/RoomListItem';
import RoomList from '../../../samples/list.js';

export default () => {
	const [ rooms, setRooms ] = React.useState(null);

	const isFirst = React.useRef(true);
	React.useEffect(() => {
		if (!isFirst.current) return;

		setRooms(RoomList.data);
	});

	return (
		<Ul>
			{
				rooms && rooms.map((item) => (
					<RoomListItem key={item.id} {...item} />
				))
			}
		</Ul>
	);
}

const Ul = styled.ul`
	padding-top: 10px;
`;
