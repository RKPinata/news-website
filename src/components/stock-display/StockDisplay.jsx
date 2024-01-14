import './stock-display.css';

export default function StockDisplay({ ticker, latestPrice, percentageChange, priceChange }) {
  const isPositiveChange = percentageChange >= 0;

  const percentageChangeStyle = {
    color: isPositiveChange ? '#1db954' : '#f45b5b',
    fontSize: '1.2rem', // Adjust the font size as needed
  };

  const priceChangeStyle = {
    color: isPositiveChange ? '#1db954' : '#f45b5b',
    fontSize: '0.9rem', // Adjust the font size as needed
  };

  return (
    <div className="stock-row-container">
      <div className="stock-display">
        <div className="top-line">
          <span className="ticker">{ticker}</span>
          <span className="latest-price">{latestPrice}</span>
        </div>
        <div className="bottom-line">
          <span className="percentage-change" style={percentageChangeStyle}>
            {percentageChange}%
          </span>
          <span className="price-change" style={priceChangeStyle}>
            ({priceChange})
          </span>
        </div>
      </div>
    </div>
  );
}