import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({
    symbol = "NASDAQ:AAPL",
    theme = "dark",
    interval = "D",
    locale = "en"
}) {
    const container = useRef();

    useEffect(() => {
        if (!container.current) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "autosize": true,
            "symbol": symbol,
            "interval": interval,
            "timezone": "Etc/UTC",
            "theme": theme,
            "style": "1",
            "locale": locale,
            "enable_publishing": false,
            "allow_symbol_change": true,
            "hide_side_toolbar": false,
            "calendar": false,
            "support_host": "https://www.tradingview.com"
        });

        container.current.innerHTML = ""; // Clear previous
        container.current.appendChild(script);
    }, [symbol, theme, interval, locale]);

    return (
        <div className="tradingview-widget-container h-full w-full" ref={container}>
            <div className="tradingview-widget-container__widget h-full w-full"></div>
        </div>
    );
}

export default memo(TradingViewWidget);
