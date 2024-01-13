import './App.css'
import './components/stock-display/stock-display.css'
import StockDisplay from './components/stock-display/StockDisplay'
import React from 'react';
import { STOCK_DATA } from './components/stock-display/stock-data';

function App() {
  return (
    <div>
      <header className="stock-row-container">
        {STOCK_DATA.map((stock, index) => (
          <StockDisplay
            key={index}
            ticker={stock.ticker}
            latestPrice={stock.latestPrice}
            percentageChange={stock.percentageChange}
            priceChange={stock.priceChange}
          />
        ))}
      </header>
      {/* The rest of your website content goes here */}
    </div>
  );
}

export default App
