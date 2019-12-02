import * as React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import ChatList from 'containers/room/ChatList';
import MessageContainer from 'containers/room/MessageContainer';
import RoomMock from '../../samples/room.js';

export default ({
  match: { params: { id }}
}) => {
  const [ roomData, setRoomData ] = React.useState(null);

  const isFirst = React.useRef(true);
  React.useEffect(() => {
    if (!isFirst.current) return;
    isFirst.current = false;

    setRoomData(RoomMock[id]);
  });

  if ( !roomData ) return null;
  return (
    <>
      <Header title={roomData.username} />
      <Div>
        { roomData.messages && <ChatList messages={roomData.messages} /> }
        <MessageContainer/>
      </Div>
    </>
  );
}

const Div = styled.div`
  padding: 64px 16px 20px;
  height: calc(100% - 84px);
  background-color: #f9f9fb;
`;