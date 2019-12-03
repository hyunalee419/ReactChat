import * as React from 'react';

export default ({
  buttonProps,
  imgProps
}: {
	buttonProps?: object;
	imgProps: object;
}) => (
	<button {...buttonProps}>
		<img {...imgProps} />
	</button>
);
