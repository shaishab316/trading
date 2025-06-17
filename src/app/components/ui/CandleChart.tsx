/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactApexChart from "react-apexcharts";

const CandleChart = ({ data }: { data: number[][] }) => {
	const series = [
		{
			name: "Candlestick",
			type: "candlestick" as const,
			data: data,
		},
		{
			name: "Midline",
			type: "line" as const,
			data: data.map(([x, open, , , close]) => [x, (open + close) / 2]),
		},
		...data.map(([x, _open, high, low, _close], index) => ({
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
			background: "transparent",
			toolbar: { show: false },
		},
		xaxis: {
			type: "datetime",
			labels: { style: { colors: "#d1d5db" } },
			axisBorder: {
				show: true,
				color: "#ba8517",
			},
		},
		yaxis: {
			opposite: true,
			tooltip: { enabled: true },
			labels: {
				style: { colors: "#d1d5db" },
				formatter: (value) =>
					`$${new Intl.NumberFormat("en", {
						notation: "compact",
						maximumFractionDigits: 0,
					}).format(value)}`,
			},
			axisBorder: {
				show: true,
				color: "#ba8517",
			},
		},
		grid: {
			borderColor: "#ba851733",
		},
		plotOptions: {
			candlestick: {
				colors: {
					upward: "#46c769",
					downward: "#dc143c",
				},
				wick: {
					useFillColor: true,
				},
			},
		},
		stroke: {
			width: [0, 2, ...data.map(() => 2)],
			colors: [
				undefined,
				"#f9df7b",
				...data.map(([, open, , , close]) =>
					close >= open ? "#46c769" : "#dc143c"
				),
			],
		},
		legend: {
			show: false, 
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
