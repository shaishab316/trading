import random from "../../utils/random";

export default {
	d1: [
		{
			title: "Session",
			des: `UBM${random(2023, 2029) | 0}`,
		},
		{
			title: "Latency",
			des: `${random(20, 100) | 0}ms`,
			up: `${random(1, 10) | 0}.%`,
		},
		{
			title: "CPU",
			des: `${random(10, 50) | 0}%`,
		},
	],
	d2: {
		bid_ask_heat: {
			volume: {
				value: `${random(100, 200) | 0}.30`,
				name: "Bid ask heat",
			},
			up: `${random(1, 10) | 0}.3%`,
			down: `${random(1, 10) | 0}.3%`,
			coin: "UB",
		},
		yield_curve: {
			volume: {
				value: `${random(100, 150) | 0}.10`,
				name: "Yield curve",
			},
			up: `${random(1, 10) | 0}.3%`,
			coin: "ZB",
		},
		liquidity: {
			volume: {
				value: `${random(4000, 5000) | 0}.50`,
				name: "Liquidity",
			},
			up: `${random(1, 15) | 0}%`,
			down: `${random(1, 10) | 0}.3%`,
			coin: "ES",
		},
		vwap: {
			volume: {
				value: `${random(15000, 18000) | 0}`,
				name: "VWAP",
			},
			up: `${random(1, 10) | 0}.3%`,
			coin: "NQ",
		},
	},
};
