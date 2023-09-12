import axios from "axios";

const stocksAPI = axios.create({
  baseURL: "https://api.twelvedata.com/t",
});

export const getStocks = async () => {
  const res = await stocksAPI.get(
    "time_series?symbol=TSLA&interval=1min&apikey=c9b238306ce4412085073f72f1ac3f0e"
  );
  return res.data;
};
