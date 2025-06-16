import random from "../../utils/random";

export default {
	d1: [
		{
			title: "Total trades",
			des: "127",
		},
		{
			title: "Macro Score",
			des: "7.8 / 10",
		},
	],
	d2: {
		correlation_matrix: {
			volume: {
				value: `${random(0, 1).toFixed(2)}`,
			},
			up: "",
			coin: "Correlation Matrix (NQ/ES)",
		},
		volume_surge: {
			volume: {
				value: `${random(20, 99) | 0}%`,
			},
			up: "",
			coin: "ES Volume Surge",
		},
		bullish_bias: {
			volume: {
				value: `${random(20, 99) | 0}%`,
				name: "Bullish Bias",
			},
			up: "",
			coin: "NQ Sentiment",
		},
	},
};
