import { useState, useEffect } from "react";
import { StocksList } from "../StocksList/StocksList";
import { SearchForm } from "../SearchForm/SearchForm";
import { useParams } from "react-router-dom";
import { Pagination } from "../Pagination/Pagination";

import { Navigate } from "react-router-dom";

export const Stocks2 = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchOptions, setSearchOptions] = useState({});
  const { pageURL } = useParams();

  if (!pageURL) {
    return <Navigate to="/stocks2/1" />;
  }
  useEffect(() => {
    setLoading(true);
    //let url = "https://api.twelvedata.com/stocks?source=docs";
    let url = "https://api.twelvedata.com/stocks?source=docs&exchange=NYSE ";

    //if (searchOptions.symbol) url = url + `&symbol=${searchOptions.symbol}`;
    if (searchOptions.symbol)
      url = `https://api.twelvedata.com/stocks?source=docs&symbol=${searchOptions.symbol}`;

    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setStocks(resp.data))
      .catch((error) => console.log("Error:", error))
      .finally(() => setLoading(false));
  }, [searchOptions]);

  let array = [];
  let totalPaginas = null;

  if (stocks) {
    const limite = 20;

    const inicial = (pageURL - 1) * limite;
    const final = inicial + limite;

    if (!loading) {
      array = stocks.slice(inicial, final);
      totalPaginas = Math.ceil(stocks.length / limite);
    }
  } else {
    totalPaginas = 0;
    array = [];
    console.log("sin stocks");
  }

  console.log(array, totalPaginas, loading);

  return (
    <div>
      <h2>Stocks 2</h2>
      <hr />
      <SearchForm
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
      />

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {totalPaginas <= 1 ? (
            <></>
          ) : (
            <Pagination
              paginaActual={pageURL}
              totalPaginas={totalPaginas}
              url="stocks2"
            />
          )}
          <StocksList stocks={array} />
        </>
      )}
    </div>
  );
};
