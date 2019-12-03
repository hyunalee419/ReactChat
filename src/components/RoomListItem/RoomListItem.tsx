import * as React from 'react';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import styled from 'styled-components';

export default ({
  id, username, profile, lastMessage, lastMessageDateTime, unreadCount
}: {
	id: number,
	username: string,
	profile: string,
	lastMessage: string,
	lastMessageDateTime: string,
	unreadCount?: number
}) => (
	<Link to={`/room/${id}`} style={{ textDecoration: 'none' }}>
		<Li>
			<ProfileImg src={profile} alt={`profile-${username}`} />
			<Content>
				{username}
				<p>{lastMessage}</p>
			</Content>
			<div style={{ position: 'relative', paddingTop: 7 }}>
				<LastMessageDateTime value={lastMessageDateTime} />
				{unreadCount && <UnreadCount>{unreadCount}</UnreadCount>}
			</div>
		</Li>
	</Link>
);

const Li = styled.li`
	padding: 9px 16px;
	display: flex;
`;

const LastMessageDateTime = ({ value }) => {
	const today = moment()
		, checkDate = moment(value);

	let returnValue;
	if (today.isSame(checkDate, 'day')) {
		returnValue = checkDate.format('HH:mm');
	} else {
		returnValue = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][checkDate.day()];
	}

	return <StyledDate>{returnValue}</StyledDate>;
};

const ProfileImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50px;
`;

const Content = styled.div`
  padding: 9px 15px;
  flex: 1;
  width: calc(100% - 117px);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: var(--color-charcoal-grey);
  
  p {
  	font-size: 13px;
    letter-spacing: -0.1px;
    font-weight: initial;
    color: var(--color-grey);
    overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
  }
`;

const StyledDate = styled.span`
	text-align: right;
	font-size: 11px;
	font-weight: 500;
	color: var(--color-charcoal-grey-two);
	opacity: 0.4;
`;

const UnreadCount = styled.div`
	position: absolute;
	right: 0;
	top: 30px;
  width: 18px;
  height: 18px;
  border-radius: 10.5px;
  background-color: var(--color-purple);
	font-size: 10px;
	text-align: center;
	letter-spacing: -0.08px;
	line-height: 18px;
  color: var(--color-white);
`;
