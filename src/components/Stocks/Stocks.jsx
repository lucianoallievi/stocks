import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getStocks } from "../../api/stocksAPI";
import { getPoke } from "../../api/pokeAPI";
import { json, Navigate } from "react-router-dom";
import { StocksList } from "../StocksList/StocksList";
import { useParams } from "react-router-dom";

import { Pagination } from "../Pagination/Pagination";

export default function Stocks() {
  const { pageURL } = useParams();
  console.log(pageURL);
  if (!pageURL) {
    return <Navigate to="/stocks/1" />;
  }

  const [page, setPage] = useState(null);
  const [exchange, setExchange] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  //const [isError, setIsError] = useState(false);
  //const [error, setError] = useState();

  const { isFetching, data, isError, error, refetch } = useQuery({
    queryKey: ["stocks"],
    queryFn: () => getStocks(symbol, exchange),
    enabled: false,
  });

  useEffect(() => {
    //console.log(refetch());
    /*console.log(isFetching);
    console.log(data);
    console.log(isError);*/
    //setIsLoading(isFetching);
    //    setStocks(data.data);
    //   setIsError(_isError);
    // setError(_error);
  }, []);

  if (isFetching) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error}</div>;
  let totalPaginas;
  let array;
  if (data && data.data) {
    let limite = 20;

    totalPaginas = Math.ceil(data.data.length / limite);
    let paginaActual = pageURL;

    let inicial = (paginaActual - 1) * limite;
    let final = inicial + limite;

    array = data.data.slice(inicial, final);
  } else {
    totalPaginas = 0;
    array = [];
  }

  return (
    <div>
      <input
        placeholder="exchange"
        name="exchange"
        value={exchange}
        onChange={(e) => {
          setExchange(e.target.value);
        }}
      />
      <input
        name="symbol"
        placeholder="symbol"
        value={symbol}
        onChange={(e) => {
          setSymbol(e.target.value);
        }}
      />
      <button
        onClick={() => {
          refetch();
        }}
      >
        Enviar
      </button>
      {(() => {
        if (data && data.data) {
          return (
            <Pagination
              paginaActual={pageURL}
              totalPaginas={totalPaginas}
              setPaginaActual={setPage}
            />
          );
        }
      })()}
      <StocksList stocks={array} />
    </div>
  );
}

//<Pagination
//paginaActual={paginaActual}
//setPaginaActual={setPaginaActual}
//limite={limite}
//totalPaginas={totalPaginas}
