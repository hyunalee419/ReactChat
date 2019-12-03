import * as React from 'react';
import styled from 'styled-components';
import Input from 'components/common/Input';
import ImgButton from 'components/common/ImgButton';

export default ({
	onSubmit
}: {
	onSubmit: (e: React.FormEvent) => void;
}) => {
	return (
		<Form onSubmit={onSubmit}>
			<Input
				name="message"
				placeholder="메시지를 입력해주세요.."
				style={{ width: 'calc(100% - 94px)' }}
			/>
			<ImgButton
				buttonProps={{
					type: 'submit',
					style: {
						float: 'right',
						width: 50,
						height: 50,
						borderRadius: 25,
						backgroundColor: 'var(--color-purple)'
					}
				}}
				imgProps={{
					src: '/img-send@3x.png',
					style: {
						margin: '0 auto',
						display: 'block',
						width: 26,
					}
				}}
			/>
		</Form>
	)
};

const Form = styled.form`
	position: fixed;
  bottom: 20px;
  left: 16px;
  width: calc(100% - 32px);
`;


