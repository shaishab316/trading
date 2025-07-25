/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState, type RefObject } from 'react';
import Button from '../ui/Button';
import {
	AreaSeries,
	CandlestickSeries,
	ColorType,
	createChart,
	createSeriesMarkers,
	LineSeries,
	type IChartApi,
	type ISeriesApi,
	type SeriesOptionsMap,
} from 'lightweight-charts';
import TrendArrow from '../ui/TrendArrow';
import { getData } from './GraphData';
import WinRate from '../winrate/WinRate';

const views = ['candles', 'areas'] as const;
type TView = (typeof views)[number];

const data = getData();

export default function GraphCard({
	options,
	layout,
}: {
	options?: THeaderOption;
	layout?: { heightFaction?: number };
}) {
	const chartViewRef = useRef<HTMLDivElement>(null);
	const chartRef = useRef<IChartApi | null>(null);
	const toolTipRef = useRef<HTMLDivElement>(null);
	const [view, setView] = useState<TView>('candles');

	useEffect(() => {
		chartRef.current = withChart(chartViewRef, {
			heightFaction: layout?.heightFaction ?? 2,
		});
		let series: ISeriesApi<keyof SeriesOptionsMap>;

		if (view === 'areas') {
			const areaSeries = chartRef.current.addSeries(AreaSeries, {
				lineColor: '#e11e3a',
				topColor: '#b61e32',
				bottomColor: '#b61e3210',
			});

			areaSeries.setData(data);
			series = areaSeries;
		} else {
			const candlestickSeries = chartRef.current.addSeries(CandlestickSeries, {
				upColor: '#2ecc71',
				downColor: '#dc143c',
				borderVisible: false,
				wickUpColor: '#2ecc71',
				wickDownColor: '#dc143c',
			});

			candlestickSeries.setData(data);

			createSeriesMarkers(candlestickSeries, [
				{
					time: data[0].time,
					position: 'aboveBar',
					color: '#f68410',
					shape: 'arrowDown',
					text: 'D',
				},
			]);

			const lineSeries = chartRef.current.addSeries(LineSeries, {
				color: '#f9df7b',
			});

			lineSeries.setData(data);
			series = lineSeries;
		}

		chartRef.current.timeScale().fitContent();
		chartRef.current.applyOptions({
			localization: {
				priceFormatter: formatter,
			},
		});

		function resize() {
			chartRef.current!.applyOptions({
				width: chartViewRef.current?.clientWidth,
				height: chartViewRef.current!.clientWidth / 2,
			});
			chartRef.current!.timeScale().fitContent();
		}
		window.addEventListener('resize', resize);

		chartRef.current.subscribeCrosshairMove((param) => {
			if (
				!param.point ||
				!param.time ||
				param.point.x < 0 ||
				param.point.x > chartViewRef.current!.clientWidth ||
				param.point.y < 0 ||
				param.point.y > chartViewRef.current!.clientHeight
			) {
				toolTipRef.current!.style.display = 'none';
			} else {
				toolTipRef.current!.style.display = 'block';
				const data: any = param.seriesData.get(series);
				toolTipRef.current!.innerHTML = /*html*/ `
					<div style="font-size: 18px; font-weight: semibold">${options?.coin}</div>
					<div>${formatter(data?.value?.toFixed(2))}</div>
					<div>${new Date(+param.time * 1000).toLocaleDateString()}</div>
				`;

				const y = param.point.y;
				let left = param.point.x + 15;
				if (
					left >
					chartViewRef.current!.clientWidth - toolTipRef.current!.clientWidth
				) {
					left = param.point.x - 15 - toolTipRef.current!.clientWidth;
				}

				let top = y + 15;
				if (
					top >
					chartViewRef.current!.clientHeight - toolTipRef.current!.clientHeight
				) {
					top = y - toolTipRef.current!.clientHeight - 15;
				}
				toolTipRef.current!.style.left = left + 'px';
				toolTipRef.current!.style.top = top + 'px';
			}
		});

		return () => {
			chartRef.current!.remove();
			window.removeEventListener('resize', resize);
		};
	}, [view]);

	const winRates = Object.entries(options?.predict ?? {}).map(
		([level, progress]) => (
			<WinRate progress={(progress ?? 0) | 0} level={level ?? ''} />
		)
	);

	return (
		<div className='bg-[#00000028] p-[30px] rounded-2xl border border-[#3b3b3b]'>
			<div className='flex flex-wrap items-center justify-between w-full gap-4'>
				<div>
					{options?.coin && (
						<h3 className='text-lg font-bold'>
							{options.coin}:{' '}
							{Intl.NumberFormat('en', {
								notation: 'compact',
								currency: 'USD',
								style: 'currency',
							}).format(options?.value ?? 0)}
						</h3>
					)}
				</div>
				<div className='flex flex-wrap items-center gap-4 pb-2'>
					{(options?.up || options?.down) && (
						<div className='text-[#c0c0c0] flex items-center gap-1'>
							{options.up ?? options.down}
							<TrendArrow signal={options.up ? 'up' : 'down'} />
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
					{winRates?.[0]}
				</div>
			</div>
			<div className='flex flex-wrap gap-4 justify-end'>
				{winRates?.slice(1)}
			</div>
			<div ref={chartViewRef} className='mt-10 relative cursor-pointer'>
				<span className='absolute -top-8 right-3'>USD</span>
				<div
					ref={toolTipRef}
					className='hidden bg-white/80 absolute p-2 box-border text-xs text-left z-[1000] top-[12px] left-[12px] pointer-events-none border font-sans text-black rounded-md'
				></div>
			</div>
		</div>
	);
}

type THeaderOption = {
	coin?: string;
	value?: number;
	up?: string;
	down?: string;
	predict: {
		[key: string]: number;
	};
};

const withChart = (
	ref: RefObject<HTMLDivElement | null>,
	{
		heightFaction,
	}: {
		heightFaction: number;
	}
) => {
	const chart = createChart(ref.current!, {
		layout: {
			background: {
				type: ColorType.Solid,
				color: 'transparent',
			},
			textColor: 'white',
		},
		width: ref.current!.clientWidth,
		height: ref.current!.clientWidth / heightFaction,
		grid: {
			vertLines: { color: 'transparent' },
			horzLines: { color: '#56502699' },
		},
	});

	chart.priceScale('right').applyOptions({
		borderColor: '#b57e10aa',
	});

	chart.timeScale().applyOptions({
		borderColor: '#b57e10aa',
	});

	return chart;
};

const formatter = Intl.NumberFormat(navigator.language, {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
}).format;
