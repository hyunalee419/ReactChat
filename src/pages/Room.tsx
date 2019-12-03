import * as React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import ImgButton from 'components/common/ImgButton';
import ChatList from 'containers/room/ChatList';
import MessageContainer from 'containers/room/MessageContainer';
import RoomMock from '../../samples/room.js';

export default ({
  history,
  match: { params: { id }}
}) => {
  const [ title, setTitle ] = React.useState(null);
  const [ messages, setMessages ] = React.useState(null);

  const isFirst = React.useRef(true);
  React.useEffect(() => {
    if (!isFirst.current) return;
    isFirst.current = false;

    setTitle(RoomMock[id].username);
    setMessages(RoomMock[id].messages);
  });

  const goBack = React.useCallback(() => history.goBack(), [history]);

  const handleSendMessage = React.useCallback((e) => {
    e.preventDefault();

    const { message } = e.target;
    setMessages([
      ...messages,
      { id: messages.length, message: message.value, send: true }
    ]);
  }, undefined);

  if ( !messages ) return null;
  return (
    <>
      <Header
        title={title}
        left={(
          <ImgButton
            buttonProps={{
              onClick: goBack,
              style: { float: 'left', padding: '12px 0 0 10px' }
            }}
            imgProps={{ src: '/img-back@3x.png', style: { width: 24, height: 24 } }}
          />
        )}
      />
      <Div>
        { messages && <ChatList messages={messages} /> }
        <MessageContainer
          onSubmit={handleSendMessage}
        />
      </Div>
    </>
  );
}

const Div = styled.div`
  padding: 64px 16px 20px;
  height: calc(100% - 84px);
  background-color: #f9f9fb;
`;
