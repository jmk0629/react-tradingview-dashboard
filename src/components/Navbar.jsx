import React from 'react';
import { BarChart3, Globe } from 'lucide-react';

const Navbar = ({ activeMarket, setActiveMarket }) => {
    const markets = [
        { id: 'CRYPTO', label: 'Crypto', symbol: 'BINANCE:BTCUSDT' },
        { id: 'KR', label: 'Korea', symbol: 'KRX:005930' },
        { id: 'US', label: 'USA', symbol: 'NASDAQ:AAPL' },
        { id: 'JP', label: 'Japan', symbol: 'TSE:7203' },
        { id: 'VN', label: 'Vietnam', symbol: 'HOSE:VNM' },
        { id: 'CN', label: 'China', symbol: 'SSE:000001' },
        { id: 'ID', label: 'Indonesia', symbol: 'IDX:BBRI' },
    ];

    return (
        <nav className="glass-nav sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <BarChart3 className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            GlobalDash
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {markets.map((market) => (
                                <button
                                    key={market.id}
                                    onClick={() => setActiveMarket(market)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeMarket.id === market.id
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                                        }`}
                                >
                                    {market.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:hidden overflow-x-auto pb-2 px-4 flex gap-2">
                {markets.map((market) => (
                    <button
                        key={market.id}
                        onClick={() => setActiveMarket(market)}
                        className={`whitespace-nowrap px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeMarket.id === market.id
                                ? 'bg-primary/10 text-primary'
                                : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                            }`}
                    >
                        {market.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
