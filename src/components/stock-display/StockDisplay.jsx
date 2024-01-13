import './stock-display.css'

export default function StockDisplay({ ticker, latestPrice, percentageChange, priceChange }) {
    return (
      <div className="stock-row-container">
        <div className="stock-display">
          <span className="ticker">{ticker}</span>
          <span className="latest-price">{latestPrice}</span>
          <span className="percentage-change">{percentageChange}</span>
          <span className="price-change">{priceChange}</span>
        </div>
      </div>
    );
  }