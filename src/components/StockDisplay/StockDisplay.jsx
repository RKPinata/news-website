import "./StockDisplay.css";

export default function StockDisplay({
  ticker,
  latestPrice,
  percentageChange,
  priceChange,
}) {
  const isPositiveChange = (change) => {
    return change > 0;
  };

  /** @returns color classnames for change element */
  const changeColor = (changeElementName) => {
    return isPositiveChange(changeElementName)
      ? "positive-change"
      : "negative-change";
  };

  return (
    <div className="stock-row-container">
      <div className="stock-display">
        <div className="top-line">
          <span className="ticker">{ticker}</span>
          <span className="latest-price">{latestPrice}</span>
        </div>
        <div className="bottom-line">
          <span
            className={`percentage-change ${changeColor(percentageChange)}`}
          >
            {percentageChange}%
          </span>
          <span className={`price-change ${changeColor(priceChange)}`}>
            ({priceChange})
          </span>
        </div>
      </div>
    </div>
  );
}
