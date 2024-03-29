import * as React from 'react';
import Header from 'components/common/Header';
import RoomList from 'containers/list/RoomList';
import ImgButton from 'components/common/ImgButton';

export default () => (
  <div className="room-list">
    <Header
      title="채팅"
      left={(
        <ImgButton
          buttonProps={{ style: { float: 'left', padding: '12px 0 0 10px' } }}
          imgProps={{ src: '/menu@3x.png', style: { width: 24, height: 24 } }}
        />
      )}
      right={(
        <ImgButton
          buttonProps={{ style: { float: 'right', padding: '10px 12px' } }}
          imgProps={{ src: '/profile@3x.png', style: { width: 24, height: 24 } }}
        />
      )}
    />
    <div style={{ paddingTop: 44 }}>
      <RoomList/>
    </div>
  </div>
);
