import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCoins } from "../features/crypto/cryptoSlice";
import CryptoTable from "../components/CryptoTable";

const Home = () => {
  const dispatch = useDispatch();
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchCoins = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h,24h,7d"
      );
      const data = await res.json();
      dispatch(setCoins(data)); // Dispatch the data to Redux
      setLastUpdated(new Date().toLocaleTimeString()); // Update last updated time
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  useEffect(() => {
    fetchCoins(); // Fetch data initially

    // Set interval to fetch data every 10 seconds
    const interval = setInterval(() => {
      fetchCoins();
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [dispatch]);

  return (
    <div>
      <CryptoTable />
      <div className="last-updated">
        {lastUpdated && <p>Last updated: {lastUpdated} ago</p>}
      </div>
    </div>
  );
};

export default Home;
