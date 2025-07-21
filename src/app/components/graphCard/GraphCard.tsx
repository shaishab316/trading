import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import random from '../../../utils/random';

function interpolateColor(p: number) {
	const lerp = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);
	const clamp = (n: number, min: number, max: number) =>
		Math.max(min, Math.min(n, max));

	// Strong, vivid colors for trading/progress
	const red = [220, 38, 38]; // Tailwind red-600 (#dc2626)
	const orange = [251, 146, 60]; // Tailwind orange-400 (#fb923c)
	const green = [34, 197, 94]; // Tailwind green-500 (#22c55e)

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

function TradingViewWidget({
	options = {
		name: 'Vol',
		coin: 'UB',
		value: '+22',
		up: '2.3%',
		down: '1.3%',
		progress: random(0, 100),
	},
}: {
	options?: {
		name?: string;
		coin?: string;
		value?: string;
		up?: string;
		down?: string;
		progress?: number;
	};
}) {
	const [progress, setProgress] = useState(options.progress || 0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setProgress(random(0, 100));
		}, 3000);

		return () => clearTimeout(timeout);
	}, [progress]);

	const container = useRef<HTMLDivElement>(null);
	const scriptAppended = useRef(false);

	useEffect(() => {
		if (container.current && !scriptAppended.current) {
			console.log('Appending TradingView script'); // Debug log
			const script = document.createElement('script');
			script.src =
				'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
			script.type = 'text/javascript';
			script.async = true;
			script.innerHTML = JSON.stringify({
				container_id: 'tradingview_widget',
				symbol: 'BINANCE:BTCUSDT', // Crypto pair for 24/7 real-time updates
				interval: '1', // 1-minute interval (smallest standard interval)
				allow_symbol_change: true, // Allow changing symbols in toolbar
				calendar: false,
				details: false,
				hide_side_toolbar: false, // Show side toolbar for drawing tools
				hide_top_toolbar: false, // Show top toolbar with chart type menu
				hide_legend: false,
				hide_volume: true,
				hotlist: false,
				locale: 'en',
				save_image: false,
				style: '1', // Candlesticks (users can change via toolbar)
				theme: 'dark', // Dark theme
				timezone: 'Etc/UTC',
				backgroundColor: 'rgba(0, 0, 0, 0.9)', // Dark background
				gridColor: 'rgba(255, 255, 255, 0.1)', // Light grid for contrast
				watchlist: [],
				withdateranges: true, // Show date ranges in toolbar
				compareSymbols: [],
				studies: ['MA@tv-basicstudies'], // Moving average
				autosize: false,
				width: '100%',
				height: '490',
				upColor: '#22ab94', // Green for up candles
				downColor: '#f7525f', // Red for down candles
				borderUpColor: '#22ab94',
				borderDownColor: '#f7525f',
				wickUpColor: '#22ab94',
				wickDownColor: '#f7525f',
			});

			container.current.appendChild(script);
			scriptAppended.current = true;

			// Add CSS for smoother transitions
			const style = document.createElement('style');
			style.innerHTML = `
        .tradingview-widget-container iframe {
          transition: all 0.3s ease-in-out;
        }
        .tradingview-widget-container canvas {
          transition: transform 0.3s ease-in-out;
        }
      `;
			document.head.appendChild(style);

			return () => {
				console.log('Cleaning up TradingView script'); // Debug log
				if (container.current && script.parentNode) {
					container.current.removeChild(script);
					scriptAppended.current = false;
				}
				document.head.removeChild(style);
			};
		}
	}, []);

	return (
		<div>
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
							<div className='w-0 h-0 border-b-[10px] border-b-[#2ecc71] border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent'></div>
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
					<Button style={{ padding: '3.75px' }}>
						<img src='/icons/crosshair.svg' alt='crosshair' />
					</Button>
					<select className='outline-0 border-b border-[#067475] pb-1'>
						{['candles', 'areas'].map((item, idx) => (
							<option className='text-black' key={idx} value={item}>
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

					{options?.up && (
						<div className='text-[#c0c0c0] flex items-center gap-1'>
							{options.up}
							<div className='w-0 h-0 border-t-[10px] border-t-[#dc143c] border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent'></div>
						</div>
					)}
				</div>
			</div>
			<div
				className='tradingview-widget-container w-full'
				id='tradingview_widget'
				ref={container}
			>
				<div className='tradingview-widget-container__widget rounded-md'></div>
			</div>
		</div>
	);
}

export default TradingViewWidget;
