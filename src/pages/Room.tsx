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
  const [ images, setImages ] = React.useState(null);

  const isFirst = React.useRef(true);
  React.useEffect(() => {
    if (!isFirst.current) return;
    isFirst.current = false;

    setTitle(RoomMock[id].username);
    setMessages(RoomMock[id].messages);
  });

  const goBack = React.useCallback(() => history.goBack(), [history]);

  const handleUploadImage = React.useCallback(({ target: { files }}) => {
    const reader = new FileReader();
    reader.onload = function () {
      setMessages([
        ...messages,
        { id: messages.length, image: this.result, send: true }
      ]);
      setImages(images ? [...images, this.result] : [this.result]);
    };
    reader.readAsDataURL(files[0]);
  }, undefined);

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
        right={(
          <div style={{ float: 'right' }}>
            <Upload onChange={handleUploadImage} />
            <ImgButton
              buttonProps={{ style: { padding: '10px 12px' }}}
              imgProps={{ src: '/img-search@3x.png', style: { width: 24, height: 24 } }}
            />
          </div>
        )}
      />
      { images && <UploadImageList images={images} /> }
      <Div className={ images ? 'upload-image' : ''}>
        { messages && <ChatList messages={messages} /> }
        <MessageContainer
          onSubmit={handleSendMessage}
        />
      </Div>
    </>
  );
}

const Upload = ({ onChange }) => (
  <div style={{ display: 'inline-block' }}>
    <label htmlFor="ex_file">
      <img src="/img-upload@3x.png" alt="upload.png" style={{ cursor: 'pointer', width: 24, height: 24 }} />
    </label>
    <input type="file" id="ex_file" onChange={onChange} accept="image/*" style={{ display: 'none' }} />
  </div>
);

const Div = styled.div`
  padding: 64px 16px 20px;
  height: calc(100% - 84px);
  background-color: #f9f9fb;
  
  &.upload-image {
    padding-top: 128px;
    height: calc(100% - 148px);
  }
`;
