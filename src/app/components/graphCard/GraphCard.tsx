import { useEffect, useRef, useState, type RefObject } from 'react';
import Button from '../ui/Button';
import random from '../../../utils/random';
import {
	AreaSeries,
	CandlestickSeries,
	ColorType,
	createChart,
	LineSeries,
	type IChartApi,
} from 'lightweight-charts';
import TrendArrow from '../ui/TrendArrow';
import { getData } from './GraphData';

const views = ['candles', 'areas'] as const;
type TView = (typeof views)[number];

const data = getData();

export default function GraphCard({ options }: { options?: THeaderOption }) {
	const chartViewRef = useRef<HTMLDivElement>(null);
	const chartRef = useRef<IChartApi | null>(null);
	const [progress, setProgress] = useState(options?.progress ?? 0);
	const [view, setView] = useState<TView>('candles');

	useEffect(() => {
		const timeout = setTimeout(() => {
			setProgress(random(0, 100));
		}, 3000);
		return () => clearTimeout(timeout);
	}, [progress]);

	useEffect(() => {
		chartRef.current = withChart(chartViewRef);

		if (view === 'areas') {
			const areaSeries = chartRef.current.addSeries(AreaSeries, {
				lineColor: '#e11e3a',
				topColor: '#b61e32',
				bottomColor: '#b61e3210',
			});

			areaSeries.setData(data);
		} else {
			const candlestickSeries = chartRef.current.addSeries(CandlestickSeries, {
				upColor: '#2ecc71',
				downColor: '#dc143c',
				borderVisible: false,
				wickUpColor: '#2ecc71',
				wickDownColor: '#dc143c',
			});

			candlestickSeries.setData(data);

			const lineSeries = chartRef.current.addSeries(LineSeries, {
				color: '#f9df7b',
			});

			lineSeries.setData(data);
		}

		chartRef.current.timeScale().fitContent();

		function resize() {
			chartRef.current!.applyOptions({
				width: chartViewRef.current?.clientWidth,
				height: chartViewRef.current!.clientWidth / 2,
			});
			chartRef.current!.timeScale().fitContent();
		}
		window.addEventListener('resize', resize);

		return () => {
			chartRef.current!.remove();
			window.removeEventListener('resize', resize);
		};
	}, [view]);

	return (
		<div className='backdrop-blur-2xl bg-[#00000028] p-[30px] rounded-2xl border border-[#3b3b3b]'>
			<div className='flex flex-wrap items-center justify-between w-full gap-4 pb-2'>
				<div>
					{options?.coin && (
						<h3 className='text-lg font-bold'>
							{options.coin}: {options?.value}
						</h3>
					)}
				</div>
				<div className='flex flex-wrap items-center gap-4 pb-2'>
					{options?.up && (
						<div className='text-[#c0c0c0] flex items-center gap-1'>
							{options.up}
							<TrendArrow signal='up' />
						</div>
					)}
					<select className='outline-0 border-b border-[#067475] pb-1'>
						{['1m', '5m', '30m', '1h', '4h', '1d', '1w', '1m'].map(
							(item, idx) => (
								<option className='text-black' key={idx} value={item}>
									{item}
								</option>
							)
						)}
					</select>
					<Button
						title='Reset zoom'
						onClick={() => chartRef.current?.timeScale().fitContent()}
						style={{ padding: '3.75px' }}
					>
						<img src='/icons/crosshair.svg' alt='crosshair' />
					</Button>
					<select
						onChange={(e) => setView(e.target.value as TView)}
						className='outline-0 border-b border-[#067475] pb-1'
					>
						{views.map((item, idx) => (
							<option
								selected={item === view}
								className='text-black'
								key={idx}
								value={item}
							>
								{item}
							</option>
						))}
					</select>

					{options?.name && <h4>{options.name} :</h4>}

					{progress && (
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
					)}

					{options?.down && (
						<div className='text-[#c0c0c0] flex items-center gap-1'>
							{options.down}
							<TrendArrow signal='down' />
						</div>
					)}
				</div>
			</div>
			<div ref={chartViewRef}></div>
		</div>
	);
}

type THeaderOption = {
	name?: string;
	coin?: string;
	value?: string;
	up?: string;
	down?: string;
	progress?: number;
};

const lerp = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);
const clamp = (n: number, min: number, max: number) =>
	Math.max(min, Math.min(n, max));

// Strong, vivid colors for trading/progress
const red = [220, 38, 38]; // Tailwind red-600 (#dc2626)
const orange = [251, 146, 60]; // Tailwind orange-400 (#fb923c)
const green = [34, 197, 94]; // Tailwind green-500 (#22c55e)

function interpolateColor(p: number) {
	let c;
	if (p <= 50) {
		// 0-50% red → orange
		const t = clamp(p / 50, 0, 1);
		c = red.map((v, i) => lerp(v, orange[i], t));
	} else if (p <= 100) {
		// 50-100% orange → green
		const t = clamp((p - 50) / 50, 0, 1);
		c = orange.map((v, i) => lerp(v, green[i], t));
	} else {
		c = green;
	}

	return `rgb(${c[0]},${c[1]},${c[2]})`;
}

const withChart = (ref: RefObject<HTMLDivElement | null>) => {
	const chart = createChart(ref.current!, {
		layout: {
			background: {
				type: ColorType.Solid,
				color: 'transparent',
			},
			textColor: 'white',
		},
		width: ref.current!.clientWidth,
		height: ref.current!.clientWidth / 2,
		grid: {
			vertLines: { color: 'transparent' },
			horzLines: { color: '#565026' },
		},
	});

	chart.priceScale('right').applyOptions({
		borderColor: '#b57e10',
	});

	chart.timeScale().applyOptions({
		borderColor: '#b57e10',
	});

	return chart;
};
