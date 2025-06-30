// import React, { useEffect, useRef, useState, useCallback } from "react";
// import {
// 	createChart,
// 	ColorType,
// 	type IChartApi,
// 	type ISeriesApi,
// 	type CandlestickData,
// 	type Time,
// } from "lightweight-charts";

// // Types
// interface MarketData {
// 	start: number;
// 	end: number;
// 	high: number;
// 	low: number;
// 	open?: number;
// 	close?: number;
// 	volume?: number;
// }

// interface SmartZone {
// 	start: number;
// 	end: number;
// 	high: number;
// 	low: number;
// }

// interface OverlayData {
// 	smartzones?: SmartZone[];
// 	vwapGlide?: Array<{ time: number; value: number }>;
// 	flowPrint?: Array<{ time: number; price: number; imbalance: "buy" | "sell" }>;
// }

// // Market data generator
// class MarketDataGenerator {
// 	private basePrice: number;
// 	private currentPrice: number;
// 	private trend: number;
// 	private volatility: number;
// 	private lastTime: number;

// 	constructor(basePrice = 100, volatility = 0.02) {
// 		this.basePrice = basePrice;
// 		this.currentPrice = basePrice;
// 		this.trend = 0;
// 		this.volatility = volatility;
// 		this.lastTime = Math.floor(Date.now() / 1000) - 3600; // Start 1 hour ago
// 	}

// 	generateCandle(duration = 60): MarketData {
// 		// Random walk with mean reversion
// 		const priceChange =
// 			(Math.random() - 0.5) * this.volatility * this.currentPrice;
// 		const meanReversion = (this.basePrice - this.currentPrice) * 0.001;

// 		this.currentPrice += priceChange + meanReversion;

// 		// Generate OHLC
// 		const open = this.currentPrice;
// 		const volatilityRange = this.currentPrice * this.volatility * 0.5;

// 		const high = open + Math.random() * volatilityRange;
// 		const low = open - Math.random() * volatilityRange;
// 		const close = low + Math.random() * (high - low);

// 		this.currentPrice = close;

// 		const start = this.lastTime;
// 		const end = this.lastTime + duration;
// 		this.lastTime = end;

// 		return {
// 			start,
// 			end,
// 			open: Number(open.toFixed(2)),
// 			high: Number(high.toFixed(2)),
// 			low: Number(low.toFixed(2)),
// 			close: Number(close.toFixed(2)),
// 			volume: Math.floor(Math.random() * 10000) + 1000,
// 		};
// 	}

// 	generateHistoricalData(count = 100): MarketData[] {
// 		const data: MarketData[] = [];
// 		for (let i = 0; i < count; i++) {
// 			data.push(this.generateCandle());
// 		}
// 		return data;
// 	}

// 	generateSmartZones(data: MarketData[]): SmartZone[] {
// 		const zones: SmartZone[] = [];
// 		const dataLength = data.length;

// 		// Generate 2-3 smart zones based on support/resistance levels
// 		for (let i = 0; i < 3; i++) {
// 			const startIndex = Math.floor(Math.random() * (dataLength - 20));
// 			const endIndex = startIndex + Math.floor(Math.random() * 15) + 5;

// 			const segment = data.slice(startIndex, endIndex);
// 			const highs = segment.map((d) => d.high);
// 			const lows = segment.map((d) => d.low);

// 			zones.push({
// 				start: segment[0].start,
// 				end: segment[segment.length - 1].end,
// 				high: Math.max(...highs),
// 				low: Math.min(...lows),
// 			});
// 		}

// 		return zones;
// 	}
// }

// const DynamicCandleChart: React.FC = () => {
// 	const chartContainerRef = useRef<HTMLDivElement>(null);
// 	const canvasOverlayRef = useRef<HTMLCanvasElement>(null);
// 	const chartRef = useRef<IChartApi | null>(null);
// 	const candlestickSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
// 	const generatorRef = useRef<MarketDataGenerator>(
// 		new MarketDataGenerator(150, 0.015)
// 	);

// 	const [data, setData] = useState<MarketData[]>([]);
// 	const [overlayData, setOverlayData] = useState<OverlayData>({});
// 	const [isLive, setIsLive] = useState(false);
// 	const [currentPrice, setCurrentPrice] = useState(150);
// 	const [priceChange, setPriceChange] = useState(0);
// 	const [symbol, setSymbol] = useState("AAPL");

// 	// Theme colors
// 	const colors = {
// 		background: "transparent",
// 		text: "#d1d5db",
// 		grid: "rgba(186, 133, 23, 0.2)",
// 		border: "#ba8517",
// 		smartzone: "rgba(70, 199, 105, 0.1)",
// 		smartzoneBorder: "#46c769",
// 		vwap: "#f9df7b",
// 		flowPrintBuy: "#46c769",
// 		flowPrintSell: "#dc143c",
// 	};

// 	// Initialize chart
// 	useEffect(() => {
// 		if (!chartContainerRef.current) return;

// 		const chart = createChart(chartContainerRef.current, {
// 			layout: {
// 				background: { type: ColorType.Solid, color: colors.background },
// 				textColor: colors.text,
// 			},
// 			width: chartContainerRef.current.clientWidth,
// 			height: 500,
// 			grid: {
// 				vertLines: { color: colors.grid },
// 				horzLines: { color: colors.grid },
// 			},
// 			crosshair: {
// 				mode: 1,
// 				vertLine: { color: colors.border, width: 1, style: 2 },
// 				horzLine: { color: colors.border, width: 1, style: 2 },
// 			},
// 			rightPriceScale: {
// 				borderColor: colors.border,
// 				textColor: colors.text,
// 			},
// 			timeScale: {
// 				borderColor: colors.border,
// 				textColor: colors.text,
// 				timeVisible: true,
// 				secondsVisible: false,
// 			},
// 			handleScroll: { mouseWheel: true, pressedMouseMove: true },
// 			handleScale: {
// 				axisPressedMouseMove: true,
// 				mouseWheel: true,
// 				pinch: true,
// 			},
// 		});

// 		chartRef.current = chart;

// 		const candlestickSeries = chart.addCandlestickSeries({
// 			upColor: "#46c769",
// 			downColor: "#dc143c",
// 			borderUpColor: "#46c769",
// 			borderDownColor: "#dc143c",
// 			wickUpColor: "#46c769",
// 			wickDownColor: "#dc143c",
// 		});

// 		candlestickSeriesRef.current = candlestickSeries;

// 		// Generate initial data
// 		const initialData = generatorRef.current.generateHistoricalData(50);
// 		setData(initialData);
// 		setCurrentPrice(initialData[initialData.length - 1].close || 150);

// 		// Generate initial overlays
// 		const smartzones = generatorRef.current.generateSmartZones(initialData);
// 		setOverlayData({ smartzones });

// 		const handleResize = () => {
// 			if (chartContainerRef.current && chartRef.current) {
// 				const rect = chartContainerRef.current.getBoundingClientRect();
// 				chartRef.current.applyOptions({ width: rect.width });

// 				if (canvasOverlayRef.current) {
// 					canvasOverlayRef.current.width = rect.width;
// 					canvasOverlayRef.current.height = rect.height;
// 					drawOverlays();
// 				}
// 			}
// 		};

// 		window.addEventListener("resize", handleResize);

// 		return () => {
// 			window.removeEventListener("resize", handleResize);
// 			if (chartRef.current) {
// 				chartRef.current.remove();
// 				chartRef.current = null;
// 				candlestickSeriesRef.current = null;
// 			}
// 		};
// 	}, []);

// 	// Update chart data
// 	useEffect(() => {
// 		if (!candlestickSeriesRef.current || data.length === 0) return;

// 		const candlestickData: CandlestickData[] = data.map((item) => ({
// 			time: item.start as Time,
// 			open: item.open || item.close || (item.high + item.low) / 2,
// 			high: item.high,
// 			low: item.low,
// 			close: item.close || (item.high + item.low) / 2,
// 		}));

// 		candlestickSeriesRef.current.setData(candlestickData);
// 		chartRef.current?.timeScale().fitContent();
// 	}, [data]);

// 	// Draw overlays
// 	const drawOverlays = useCallback(() => {
// 		if (!canvasOverlayRef.current || !chartRef.current) return;

// 		const canvas = canvasOverlayRef.current;
// 		const ctx = canvas.getContext("2d");
// 		if (!ctx) return;

// 		ctx.clearRect(0, 0, canvas.width, canvas.height);

// 		const timeScale = chartRef.current.timeScale();
// 		const priceScale = chartRef.current.priceScale("right");

// 		// Draw SmartZone boxes
// 		if (overlayData.smartzones) {
// 			overlayData.smartzones.forEach((zone, index) => {
// 				const startX = timeScale.timeToCoordinate(zone.start as Time);
// 				const endX = timeScale.timeToCoordinate(zone.end as Time);
// 				const highY = priceScale.priceToCoordinate(zone.high);
// 				const lowY = priceScale.priceToCoordinate(zone.low);

// 				if (
// 					startX !== null &&
// 					endX !== null &&
// 					highY !== null &&
// 					lowY !== null
// 				) {
// 					// Draw zone box
// 					ctx.fillStyle = colors.smartzone;
// 					ctx.fillRect(startX, highY, endX - startX, lowY - highY);

// 					// Draw zone border
// 					ctx.strokeStyle = colors.smartzoneBorder;
// 					ctx.lineWidth = 1;
// 					ctx.strokeRect(startX, highY, endX - startX, lowY - highY);

// 					// Add zone label
// 					ctx.fillStyle = colors.smartzoneBorder;
// 					ctx.font = "11px Arial";
// 					ctx.fillText(`Zone ${index + 1}`, startX + 5, highY + 15);
// 				}
// 			});
// 		}
// 	}, [overlayData]);

// 	// Live data updates
// 	useEffect(() => {
// 		if (!isLive) return;

// 		const interval = setInterval(() => {
// 			const newCandle = generatorRef.current.generateCandle();

// 			setData((prevData) => {
// 				const updatedData = [...prevData, newCandle];
// 				// Keep last 100 candles
// 				return updatedData.slice(-100);
// 			});

// 			const previousPrice = currentPrice;
// 			setCurrentPrice(newCandle.close || newCandle.high);
// 			setPriceChange((newCandle.close || newCandle.high) - previousPrice);

// 			// Occasionally generate new smart zones
// 			if (Math.random() < 0.1) {
// 				setOverlayData((prev) => ({
// 					...prev,
// 					smartzones: generatorRef.current.generateSmartZones(data.slice(-20)),
// 				}));
// 			}
// 		}, 2000); // Update every 2 seconds

// 		return () => clearInterval(interval);
// 	}, [isLive, currentPrice, data]);

// 	// Redraw overlays when data changes
// 	useEffect(() => {
// 		const timeout = setTimeout(drawOverlays, 100);
// 		return () => clearTimeout(timeout);
// 	}, [drawOverlays, overlayData]);

// 	// Handle chart events for overlay redraw
// 	useEffect(() => {
// 		if (!chartRef.current) return;

// 		const chart = chartRef.current;
// 		const handleVisibleTimeRangeChange = () => {
// 			setTimeout(drawOverlays, 0);
// 		};

// 		chart
// 			.timeScale()
// 			.subscribeVisibleTimeRangeChange(handleVisibleTimeRangeChange);
// 		return () => {
// 			chart
// 				.timeScale()
// 				.unsubscribeVisibleTimeRangeChange(handleVisibleTimeRangeChange);
// 		};
// 	}, [drawOverlays]);

// 	const handleSymbolChange = (newSymbol: string) => {
// 		setSymbol(newSymbol);
// 		// Reset generator with new base price
// 		const basePrice = Math.random() * 200 + 50;
// 		generatorRef.current = new MarketDataGenerator(basePrice, 0.015);

// 		const newData = generatorRef.current.generateHistoricalData(50);
// 		setData(newData);
// 		setCurrentPrice(newData[newData.length - 1].close || basePrice);

// 		const smartzones = generatorRef.current.generateSmartZones(newData);
// 		setOverlayData({ smartzones });
// 	};

// 	return (
// 		<div className="w-full bg-gray-900 rounded-lg overflow-hidden">
// 			{/* Header Controls */}
// 			<div className="bg-gray-800 p-4 border-b border-gray-700">
// 				<div className="flex items-center justify-between">
// 					<div className="flex items-center gap-6">
// 						<div>
// 							<select
// 								value={symbol}
// 								onChange={(e) => handleSymbolChange(e.target.value)}
// 								className="bg-gray-700 text-white px-3 py-1 rounded border border-gray-600 focus:border-yellow-500 outline-none"
// 							>
// 								<option value="AAPL">AAPL</option>
// 								<option value="GOOGL">GOOGL</option>
// 								<option value="MSFT">MSFT</option>
// 								<option value="TSLA">TSLA</option>
// 								<option value="AMZN">AMZN</option>
// 							</select>
// 						</div>

// 						<div className="text-white">
// 							<span className="text-2xl font-bold">
// 								${currentPrice.toFixed(2)}
// 							</span>
// 							<span
// 								className={`ml-2 text-sm ${
// 									priceChange >= 0 ? "text-green-400" : "text-red-400"
// 								}`}
// 							>
// 								{priceChange >= 0 ? "+" : ""}
// 								{priceChange.toFixed(2)}
// 							</span>
// 						</div>
// 					</div>

// 					<div className="flex items-center gap-4">
// 						<button
// 							onClick={() => setIsLive(!isLive)}
// 							className={`px-4 py-2 rounded font-medium transition-colors ${
// 								isLive
// 									? "bg-red-600 hover:bg-red-700 text-white"
// 									: "bg-green-600 hover:bg-green-700 text-white"
// 							}`}
// 						>
// 							{isLive ? "⏸ Pause" : "▶ Live"}
// 						</button>

// 						<div
// 							className={`px-2 py-1 rounded text-xs font-medium ${
// 								isLive ? "bg-green-600 text-white" : "bg-gray-600 text-gray-300"
// 							}`}
// 						>
// 							{isLive ? "🔴 LIVE" : "⏸ PAUSED"}
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Chart */}
// 			<div className="relative">
// 				<div
// 					ref={chartContainerRef}
// 					className="relative"
// 					style={{ width: "100%", height: "500px" }}
// 				/>

// 				<canvas
// 					ref={canvasOverlayRef}
// 					className="absolute top-0 left-0 pointer-events-none"
// 					style={{ width: "100%", height: "100%" }}
// 				/>

// 				{/* Legend */}
// 				<div className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-80 rounded p-2">
// 					<div className="flex gap-4 text-xs text-gray-300">
// 						{overlayData.smartzones && overlayData.smartzones.length > 0 && (
// 							<div className="flex items-center gap-1">
// 								<div className="w-3 h-3 border border-green-500 bg-green-500 bg-opacity-10"></div>
// 								<span>SmartZones ({overlayData.smartzones.length})</span>
// 							</div>
// 						)}
// 						<div className="flex items-center gap-1">
// 							<div className="w-3 h-2 bg-green-500"></div>
// 							<span>Bullish</span>
// 						</div>
// 						<div className="flex items-center gap-1">
// 							<div className="w-3 h-2 bg-red-500"></div>
// 							<span>Bearish</span>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Stats Footer */}
// 			<div className="bg-gray-800 p-3 border-t border-gray-700">
// 				<div className="flex justify-between text-sm text-gray-400">
// 					<span>Candles: {data.length}</span>
// 					<span>Interval: 1m</span>
// 					<span>SmartZones: {overlayData.smartzones?.length || 0}</span>
// 					<span>Last Update: {new Date().toLocaleTimeString()}</span>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default DynamicCandleChart;
