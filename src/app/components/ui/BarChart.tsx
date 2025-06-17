import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const ChartComponent = ({ data }: { data: number[] }) => {
	const options: ApexOptions = {
		chart: {
			id: "line-chart",
			background: "transparent",
			toolbar: { show: false },
		},
		xaxis: {
			categories: [
				"00:00",
				"01:00",
				"02:00",
				"03:00",
				"04:00",
				"05:00",
				"06:00",
				"07:00",
				"08:00",
				"09:00",
			],
			labels: { style: { colors: "#d1d5db" } },
			axisBorder: { show: true, color: "#ba8517" },
		},
		yaxis: {
			opposite: true,
			tooltip: { enabled: true },
			labels: {
				style: { colors: "#d1d5db" },
				formatter: (value: number) =>
					`$${new Intl.NumberFormat("en", {
						notation: "compact",
						maximumFractionDigits: 0,
					}).format(value)}`,
			},
			axisBorder: { show: true, color: "#ba8517" },
		},
		grid: { borderColor: "#ba851733" },
		stroke: { curve: "smooth" },
		fill: {
			type: "gradient",
			gradient: {
				shade: "dark",
				type: "vertical",
				gradientToColors: ["#ff000011"],
				stops: [0, 100],
			},
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
		colors: ["#ff0000"],
		theme: { mode: "dark" },
	};

	const series = [
		{
			name: "Value",
			data,
		},
	];

	return (
		<ReactApexChart
			options={options}
			series={series}
			type="area"
			height={300}
		/>
	);
};

export default ChartComponent;
