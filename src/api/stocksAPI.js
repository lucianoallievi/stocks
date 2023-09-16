import axios from "axios";

const apikey = "c9b238306ce4412085073f72f1ac3f0e";

export const stocksAPI = axios.create({
  baseURL: "https://api.twelvedata.com",
});

export const getStocks = async (symbol, exchange) => {
  if (symbol || exchange) {
    let URL = "/stocks?source=docs";

    //const res = await stocksAPI.get("/stocks?source=docs");

    //const res = await stocksAPI.get("/stocks?source=docs&exchange=NYSE");

    if (symbol) URL = URL + `&symbol=${symbol}`;
    if (exchange) URL = URL + `&exchange=${exchange}`;

    const res = await stocksAPI.get(URL);

    return res.data;
  } else {
    return { data: null };
  }
};

export const getStockDetail = async (form) => {
  //const res = await stocksAPI.get("/stocks/");
  if (form) {
    let url = `/time_series?symbol=${form.symbol}&interval=${form.interval}min`;

    if (form.start_date) url = url + `&start_date=${form.start_date}`;
    if (form.end_date) url = url + `&end_date=${form.end_date}`;

    url = url + `&apikey=${apikey}`;

    console.log("url", url);

    const res = await stocksAPI.get(url);
    return res.data;
  } else {
    return false;
  }
};
