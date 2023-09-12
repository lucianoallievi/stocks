import { useEffect, useState } from "react";
export const useSotcks = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.twelvedata.com/stocks")
      .then((response) => response.json())
      .then((response) => setStocks(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }),
    [];

  return { stocks, loading };
};
