import React from "react";
import { STOCK_DATA } from "@/constants/stock-data";
import StockDisplay from "@/components/StockDisplay/StockDisplay";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="stock-display-container">
        {STOCK_DATA.map((stock, index) => (
          <StockDisplay
            key={index}
            ticker={stock.ticker}
            latestPrice={stock.latestPrice}
            percentageChange={stock.percentageChange}
            priceChange={stock.priceChange}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;
