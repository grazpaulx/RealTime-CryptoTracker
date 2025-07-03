// import React from 'react';

// const CryptoCard = ({ coin }) => {
//   const {
//     name,
//     symbol,
//     image,
//     current_price,
//     market_cap,
//     total_volume,
//     price_change_percentage_1h_in_currency,
//     price_change_percentage_24h_in_currency,
//     price_change_percentage_7d_in_currency,
//   } = coin;

//   const formatCurrency = (num) =>
//     num?.toLocaleString('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       maximumFractionDigits: 2,
//     });

//   const formatPercent = (num) => {
//     const color = num > 0 ? 'green' : 'red';
//     return <span style={{ color }}>{num?.toFixed(2)}%</span>;
//   };

//   return (
//     <div className="crypto-card">
//       <img src={image} alt={symbol} />
//       <h2>{name} ({symbol.toUpperCase()})</h2>
//       <p>Current Price: {formatCurrency(current_price)}</p>
//       <p>Market Cap: {formatCurrency(market_cap)}</p>
//       <p>Volume: {formatCurrency(total_volume)}</p>
//       <p>Change 1h: {formatPercent(price_change_percentage_1h_in_currency)}</p>
//       <p>Change 24h: {formatPercent(price_change_percentage_24h_in_currency)}</p>
//       <p>Change 7d: {formatPercent(price_change_percentage_7d_in_currency)}</p>
//     </div>
//   );
// };

// export default CryptoCard;
