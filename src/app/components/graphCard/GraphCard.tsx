import { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
	const container = useRef(null);
	const scriptAppended = useRef(false);

	useEffect(() => {
		if (container.current && !scriptAppended.current) {
			console.log("Appending TradingView script"); // Debug log
			const script = document.createElement("script");
			script.src =
				"https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
			script.type = "text/javascript";
			script.async = true;
			script.innerHTML = JSON.stringify({
				container_id: "tradingview_widget",
				symbol: "BINANCE:BTCUSDT", // Crypto pair for 24/7 real-time updates
				interval: "1", // 1-minute interval (smallest standard interval)
				allow_symbol_change: true, // Allow changing symbols in toolbar
				calendar: false,
				details: false,
				hide_side_toolbar: false, // Show side toolbar for drawing tools
				hide_top_toolbar: false, // Show top toolbar with chart type menu
				hide_legend: false,
				hide_volume: true,
				hotlist: false,
				locale: "en",
				save_image: false,
				style: "1", // Candlesticks (users can change via toolbar)
				theme: "dark", // Dark theme
				timezone: "Etc/UTC",
				backgroundColor: "rgba(0, 0, 0, 0.9)", // Dark background
				gridColor: "rgba(255, 255, 255, 0.1)", // Light grid for contrast
				watchlist: [],
				withdateranges: true, // Show date ranges in toolbar
				compareSymbols: [],
				studies: ["MA@tv-basicstudies"], // Moving average
				autosize: false,
				width: "100%",
				height: "490",
				upColor: "#22ab94", // Green for up candles
				downColor: "#f7525f", // Red for down candles
				borderUpColor: "#22ab94",
				borderDownColor: "#f7525f",
				wickUpColor: "#22ab94",
				wickDownColor: "#f7525f",
			});

			container.current.appendChild(script);
			scriptAppended.current = true;

			// Add CSS for smoother transitions
			const style = document.createElement("style");
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
				console.log("Cleaning up TradingView script"); // Debug log
				if (container.current && script.parentNode) {
					container.current.removeChild(script);
					scriptAppended.current = false;
				}
				document.head.removeChild(style);
			};
		}
	}, []);

	return (
		<div
			className="tradingview-widget-container w-full"
			id="tradingview_widget"
			ref={container}
		>
			<div className="tradingview-widget-container__widget rounded-md"></div>
		</div>
	);
}

export default memo(TradingViewWidget);
