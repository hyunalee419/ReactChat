import * as React from 'react';
import styled from 'styled-components';
import UploadImageList from 'components/UploadImageList';
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
  const [ isImages, setIsImages ] = React.useState(false);

  const currID = React.useRef(null);
  React.useEffect(() => {
    if (currID.current === id) return;
    currID.current = id;

    setIsImages(false);
    setTitle(RoomMock[id].username);
    setMessages(RoomMock[id].messages);
  });

  const goBack = React.useCallback(() => history.goBack(), [history]);

  const handleUploadImage = React.useCallback(({ target: { checked }}) => {
    setIsImages(checked);
  }, undefined);

  const handleSendMessage = React.useCallback((e) => {
    e.preventDefault();

    const { message } = e.target;
    setMessages([
      ...messages,
      { id: messages.length, message: message.value, send: true }
    ]);
    e.target.reset();
  }, undefined);


  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('mcEventData');

    e.dataTransfer.clearData();

    setMessages([
      ...messages,
      { id: messages.length, image: data, send: true }
    ]);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

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
        right={(
          <div style={{ float: 'right' }}>
            <Upload value={isImages} onChange={handleUploadImage} />
            <ImgButton
              buttonProps={{ style: { padding: '10px 12px' }}}
              imgProps={{ src: '/img-search@3x.png', style: { width: 24, height: 24 } }}
            />
          </div>
        )}
      />

      { isImages && <UploadImageList /> }

      <Div onDrop={handleDrop} onDragOver={allowDrop} className={ isImages ? 'is-image' : '' }>
        { messages && <ChatList messages={messages} /> }
        <MessageContainer
          onSubmit={handleSendMessage}
        />
      </Div>
    </>
  );
}

const Upload = ({ value, onChange }) => (
  <div style={{ display: 'inline-block' }}>
    <label htmlFor="uploadBtn">
      <img src="/img-upload@3x.png" alt="upload.png" style={{ cursor: 'pointer', width: 24, height: 24 }} />
    </label>
    <input type="checkbox" id="uploadBtn" value={value} onChange={onChange} style={{ display: 'none' }} />
  </div>
);

const Div = styled.div`
  padding: 64px 16px 20px;
  height: calc(100% - 84px);
  background-color: #f9f9fb;
  
  &.is-image {
    padding-top: 128px;
    height: calc(100% - 148px);
  }
`;
