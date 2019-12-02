import * as React from 'react';
import Header from 'components/common/Header';
import RoomList from 'containers/list/RoomList';

export default () => (
  <>
    <Header title="채팅" />
    <div style={{ paddingTop: 44 }}>
      <RoomList/>
    </div>
  </>
);
