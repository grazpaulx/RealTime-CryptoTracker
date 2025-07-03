// import React from 'react'
// import { useSelector } from 'react-redux'

// const CryptoList = () => {
//   const assets = useSelector(state => state.crypto.assets)

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {assets.map(asset => (
//         <div key={asset.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex items-center gap-3">
//               <img src={asset.logo} alt={asset.symbol} className="w-10 h-10" />
//               <div>
//                 <h2 className="text-lg font-semibold">{asset.name}</h2>
//                 <p className="text-sm text-gray-500">{asset.symbol}</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <p className="text-xl font-bold text-green-600">${asset.price}</p>
//               <p className="text-xs text-gray-400">{asset.supply}</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-2 text-sm text-center font-medium">
//             <p className={asset.change1h >= 0 ? 'text-green-500' : 'text-red-500'}>1h: {asset.change1h}%</p>
//             <p className={asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}>24h: {asset.change24h}%</p>
//             <p className={asset.change7d >= 0 ? 'text-green-500' : 'text-red-500'}>7d: {asset.change7d}%</p>
//           </div>

//           <p className="mt-4 text-sm text-gray-500">Volume: ${Number(asset.volume24h).toLocaleString()}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default CryptoList
