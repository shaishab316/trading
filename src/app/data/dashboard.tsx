import random from "../../utils/random";

export default {
	d1: [
		{
			title: "Account",
			des: `$${new Intl.NumberFormat("en", {
				notation: "compact",
				maximumFractionDigits: 0,
			}).format(random(1_000, 1_000_000) | 0)}`,
			up: `${random(1, 10).toFixed(1)}%`,
		},
		{
			title: "Equity",
			des: `$${new Intl.NumberFormat("en", {
				notation: "compact",
				maximumFractionDigits: 1,
			}).format(random(100_000, 500_000) | 0)}`,
		},
		{
			title: "Daily PnL",
			des: `+${random(1_000, 5_000) | 0}`,
			up: `${random(1, 5).toFixed(1)}%`,
		},
		{
			title: "Strategy Used",
			des: "VWAP Pull Back long",
		},
	],
	d2: [
		{
			title: "Net ROI",
			up: `+${random(10, 20) | 0}%`,
		},
		{
			title: "Active Trades",
			down: `${random(1, 5) | 0}`,
		},
		{
			title: "Today's Volume",
			up: `${random(1, 10).toFixed(1)} Contracts`,
		},
	],
	d3: {
		volume: {
			volume: {
				value: `+${random(10, 20).toFixed(2)}`,
				name: "Volume",
			},
			up: `${random(1, 5).toFixed(2)}%`,
			down: `${random(1, 5).toFixed(2)}%`,
			coin: "UB",
		},
		rsi: {
			volume: {
				value: `${random(4_000, 5_000).toFixed(2)}`,
				name: "RSI",
			},
			up: `${random(1, 5).toFixed(2)}%`,
			down: `${random(50, 70).toFixed(2)}`,
			coin: "ES",
		},
		macd: {
			volume: {
				value: `${random(50, 100).toFixed(2)}`,
				name: "MACD",
			},
			up: `${random(10, 15).toFixed(2)}%`,
			down: `${random(1, 5).toFixed(2)}%`,
			coin: "CL",
		},
		atr: {
			volume: {
				value: `${random(15_000, 20_000).toFixed(2)}`,
				name: "ATR",
			},
			up: `${random(1, 5).toFixed(2)}%`,
			down: `${random(40, 50).toFixed(2)}`,
			coin: "NQ",
		},
	},
};
