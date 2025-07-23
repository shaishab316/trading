import type { HTMLAttributes } from 'react';

type TArrowProps = HTMLAttributes<HTMLSpanElement> & {
	signal: 'up' | 'down';
};

const TrendArrow = ({ signal, ...props }: TArrowProps) => (
	<span
		style={{
			color: signal === 'up' ? '#2ecc71' : '#e74c3c',
		}}
		{...props}
	>
		{signal === 'up' ? <>&#x25B2;</> : <>&#x25BC;</>}
	</span>
);

export default TrendArrow;
