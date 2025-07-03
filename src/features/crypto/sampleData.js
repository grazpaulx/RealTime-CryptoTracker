// const sampleData = [
//     {
//       id: 1,
//       name: 'Bitcoin',
//       symbol: 'BTC',
//       logo: "data:image/png;base64,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",
//       price: 93759.48,
//       change1h: 0.43,
//       change24h: 0.93,
//       change7d: 11.11,
//       marketCap: 1861618902186,
//       volume24h: 43874950947,
//       supply: '19.85M BTC',
//       chart: '/chart1.svg',
//     },
//     {
//       id: 2,
//       name: 'Ethereum',
//       symbol: 'ETH',
//       logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
//       price: 1802.46,
//       change1h: 0.60,
//       change24h: 3.21,
//       change7d: 13.68,
//       marketCap: 217581279327,
//       volume24h: 23547469307,
//       supply: '120.71M ETH',
//       chart: '/chart2.svg',
//     },
//     // Add 3 more: USDT, XRP, BNB
//   ]
  
//   export default sampleData
  