import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import TradingViewWidget from './components/TradingViewWidget'
import MarketList from './components/MarketList'

function App() {
  const [activeMarket, setActiveMarket] = useState({
    id: 'CRYPTO',
    label: 'Crypto',
    symbol: 'BINANCE:BTCUSDT'
  });

  // Keep track of the currently selected symbol separately from the market default
  const [currentSymbol, setCurrentSymbol] = useState('BINANCE:BTCUSDT');

  const handleMarketChange = useCallback((market) => {
    setActiveMarket(market);
    setCurrentSymbol(market.symbol);
  }, []);

  const handleSymbolSelect = useCallback((symbol) => {
    setCurrentSymbol(symbol);
  }, []);

  return (
    <div className="h-screen w-screen bg-background text-foreground flex flex-col overflow-hidden">
      <Navbar activeMarket={activeMarket} setActiveMarket={handleMarketChange} />

      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <MarketList activeMarketId={activeMarket.id} onSelectSymbol={handleSymbolSelect} />

        {/* Main Content (Chart) */}
        <section className="flex-1 relative bg-card">
          <TradingViewWidget symbol={currentSymbol} key={currentSymbol} />
        </section>
      </main>
    </div>
  )
}

export default App
