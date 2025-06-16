/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactApexChart from "react-apexcharts";

const CandleChart: React.FC = () => {
	const candlestickData = Array.from({ length: 20 }).map((_, i) => {
		const date = new Date(2025, 5, 16, i + 1);
		const high = (200 + Math.random() * 20) | 0;
		const low = (180 + Math.random() * 20) | 0;
		const open = (low + Math.random() * (high - low)) | 0;
		const close = (low + Math.random() * (high - low)) | 0;
		return [date.getTime(), open, high, low, close];
	});

	const series = [
		{
			name: "Candlestick",
			type: "candlestick" as const,
			data: candlestickData,
		},
		{
			name: "Midline",
			type: "line" as const,
			data: candlestickData.map(([x, open, , , close]) => [
				x,
				(open + close) / 2,
			]),
		},
		...candlestickData.map(([x, _open, high, low, _close], index) => ({
			name: `High-Low Bar ${index + 1}`,
			type: "line" as const,
			data: [
				[x, low],
				[x, high],
			],
		})),
	];

	const options: ApexCharts.ApexOptions = {
		chart: {
			height: 300,
			background: "transparent", // Set background to transparent
			toolbar: { show: false },
		},
		xaxis: {
			type: "datetime",
			labels: { style: { colors: "#d1d5db" } },
			axisBorder: {
				show: true,
				color: "#ba8517", // Bottom line color
			},
		},
		yaxis: {
			opposite: true, // Move y-axis to the right side
			tooltip: { enabled: true },
			labels: {
				style: { colors: "#d1d5db" },
				formatter: (value) => `$${value.toFixed(2)}`, // Format as "$89.00"
			},
			axisBorder: {
				show: true,
				color: "#ba8517", // Left line color (though y-axis is on right, this affects the grid)
			},
		},
		grid: {
			borderColor: "#ba851733", // Ensure grid lines match the axis color
		},
		plotOptions: {
			candlestick: {
				colors: {
					upward: "#46c769", // Green for up candles
					downward: "#dc143c", // Red for down candles
				},
				wick: {
					useFillColor: true,
				},
			},
		},
		stroke: {
			width: [0, 2, ...candlestickData.map(() => 2)], // Width for candlestick, midline, and each high-low bar
			colors: [
				undefined, // Candlestick uses plotOptions colors
				"#f9df7b", // Midline in yellow
				...candlestickData.map(
					([, open, , , close]) => (close >= open ? "#46c769" : "#dc143c") // Green for up, red for down
				),
			],
		},
		legend: {
			show: false, // Hide the legend to remove bottom text headers
		},
		theme: {
			mode: "dark",
		},
	};

	return (
		<div className="relative pt-6 -my-6">
			<div className="absolute right-4 top-4">USD</div>
			<ReactApexChart
				options={options}
				series={series}
				type="candlestick"
				height={300}
			/>
		</div>
	);
};

export default CandleChart;
