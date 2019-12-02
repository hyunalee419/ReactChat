import * as React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import ChatList from 'containers/room/ChatList';
import MessageContainer from 'containers/room/MessageContainer';

export default () => (
  <>
    <Header title="채팅" />
    <Div>
      <ChatList/>
      <MessageContainer/>
    </Div>
  </>
);

const Div = styled.div`
  padding: 64px 16px 20px;
  height: calc(100% - 84px);
  background-color: #f9f9fb;
`;