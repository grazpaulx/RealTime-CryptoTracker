import React from "react";
import { useSelector } from "react-redux";
import "./CryptoTable.css";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CryptoTable = () => {
  const coins = useSelector((state) => state.crypto.coins);

  return (
    <div className="crypto-container">
      <h2 className="title">Top Cryptocurrencies</h2>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td className="coin-info">
                <img src={coin.image} alt={coin.name} />
                <div>
                  <span className="coin-name">{coin.name}</span><br />
                  <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>
                </div>
              </td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td className={coin.price_change_percentage_1h_in_currency >= 0 ? "positive" : "negative"}>
                {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
              </td>
              <td className={coin.price_change_percentage_24h >= 0 ? "positive" : "negative"}>
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td className={coin.price_change_percentage_7d_in_currency >= 0 ? "positive" : "negative"}>
                {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
              </td>
              <td>${coin.market_cap.toLocaleString()}</td>
              <td>${coin.total_volume.toLocaleString()}</td>
              <td>{coin.circulating_supply.toLocaleString()} {coin.symbol.toUpperCase()}</td>
              <td>
                {coin.sparkline_in_7d?.price ? (
                  <Sparklines data={coin.sparkline_in_7d.price} width={100} height={20}>
                    <SparklinesLine color="blue" />
                  </Sparklines>
                ) : (
                  <span>No data</span> // Fallback when no sparkline data
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
