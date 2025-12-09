import React from 'react';
import { TrendingUp } from 'lucide-react';

const MARKET_DATA = {
    'CRYPTO': [
        { symbol: 'BINANCE:BTCUSDT', name: 'Bitcoin (USDT)' },
        { symbol: 'BINANCE:ETHUSDT', name: 'Ethereum' },
        { symbol: 'BINANCE:SOLUSDT', name: 'Solana' },
        { symbol: 'BINANCE:XRPUSDT', name: 'Ripple' },
        { symbol: 'BINANCE:DOGEUSDT', name: 'Dogecoin' },
    ],
    'KR': [
        { symbol: 'TVC:KOSPI', name: 'KOSPI Index' },
        { symbol: 'TVC:KOSDAQ', name: 'KOSDAQ Index' },
        { symbol: 'LSE:SMSN', name: 'Samsung Electronics (GDR)' },
        { symbol: 'NYSE:KB', name: 'KB Financial (ADR)' },
        { symbol: 'NYSE:PKX', name: 'POSCO Holdings (ADR)' },
    ],
    'US': [
        { symbol: 'NASDAQ:AAPL', name: 'Apple' },
        { symbol: 'NASDAQ:NVDA', name: 'NVIDIA' },
        { symbol: 'NASDAQ:TSLA', name: 'Tesla' },
        { symbol: 'NASDAQ:MSFT', name: 'Microsoft' },
        { symbol: 'NASDAQ:AMZN', name: 'Amazon' },
    ],
    'JP': [
        { symbol: 'TVC:NI225', name: 'Nikkei 225 Index' },
        { symbol: 'NYSE:SONY', name: 'Sony Group (ADR)' },
        { symbol: 'NYSE:TM', name: 'Toyota Motor (ADR)' },
        { symbol: 'NYSE:HMC', name: 'Honda Motor (ADR)' },
        { symbol: 'NYSE:MUFG', name: 'Mitsubishi UFJ (ADR)' },
    ],
    'VN': [
        { symbol: 'AMEX:VNM', name: 'VanEck Vietnam ETF' },
        { symbol: 'INDEX:VNINDEX', name: 'VN Index' },
        { symbol: 'HKEX:6000', name: 'Vincom Retail (via HK?? Check)' }, // risky, sticking to VNM
    ],
    'CN': [
        { symbol: 'TVC:SHCOMP', name: 'Shanghai Composite' },
        { symbol: 'HKEX:9988', name: 'Alibaba (HK)' },
        { symbol: 'HKEX:700', name: 'Tencent (HK)' },
        { symbol: 'HKEX:3690', name: 'Meituan (HK)' },
        { symbol: 'HKEX:1211', name: 'BYD (HK)' },
    ],
    'ID': [
        { symbol: 'IDX:COMPOSITE', name: 'IDX Composite' },
        { symbol: 'AMEX:EIDO', name: 'MSCI Indonesia ETF' },
        { symbol: 'NYSE:TLK', name: 'Telkom Indonesia (ADR)' },
    ],
};

const MarketList = ({ activeMarketId, onSelectSymbol }) => {
    const items = MARKET_DATA[activeMarketId] || [];

    return (
        <div className="w-64 glass-card border-r border-white/5 flex flex-col h-full overflow-hidden">
            <div className="p-4 border-b border-white/10">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Popular
                </h2>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {items.map((item) => (
                    <button
                        key={item.symbol}
                        onClick={() => onSelectSymbol(item.symbol)}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-white/5 transition-colors group"
                    >
                        <div className="font-medium group-hover:text-primary transition-colors">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.symbol}</div>
                    </button>
                ))}
                {items.length === 0 && (
                    <div className="p-4 text-center text-muted-foreground text-sm">
                        No items found for this market.
                    </div>
                )}
            </div>
        </div>
    );
};

export default MarketList;
