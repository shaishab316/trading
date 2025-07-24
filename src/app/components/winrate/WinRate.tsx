import TrendArrow from '../ui/TrendArrow';

export default function WinRate({
	progress,
	level,
}: {
	progress: number;
	level: string;
}) {
	return (
		<div className='flex gap-4 items-center justify-center'>
			<div>{level} :</div>
			<div className='bg-[#c0c0c0] w-[80px] h-5 rounded-full overflow-hidden relative select-none'>
				<div
					className='h-5 transition-all duration-1000 absolute top-0 left-0'
					style={{
						width: progress * 0.8,
						backgroundColor: interpolateColor(progress),
					}}
				></div>
				<div className='h-full flex justify-center items-center mix-blend-soft-light relative text-xs text-shadow'>
					{progress | 0}%
				</div>
			</div>

			<div className='text-[#c0c0c0] flex items-center gap-1'>
				{progress > 20 ? progress + '%' : 'low'}
				<TrendArrow signal={progress > 20 ? 'up' : 'down'} />
			</div>
		</div>
	);
}

const colors = [0xdc2626, 0xfb923c, 0x22c55e];

const colorCache = new Uint32Array(101);

const interpolateColor = (percent: number) => {
	let hexColor: number | undefined = colorCache[percent];

	if (!hexColor) {
		const [from, to, t] =
			percent <= 50
				? [colors[0], colors[1], percent / 50]
				: [colors[1], colors[2], (percent - 50) / 50];

		const r = ((from >> 16) + ((to >> 16) - (from >> 16)) * t) | 0;
		const g =
			(((from >> 8) & 0xff) + (((to >> 8) & 0xff) - ((from >> 8) & 0xff)) * t) |
			0;
		const b = ((from & 0xff) + ((to & 0xff) - (from & 0xff)) * t) | 0;

		hexColor = (r << 16) | (g << 8) | b;
		colorCache[percent] = hexColor;
	}

	return `#${hexColor.toString(16).padStart(6, '0')}`;
};
