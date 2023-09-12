import { useState, useEffect } from "react";
import { StocksList } from "../StocksList/StocksList";

export const Stocks2 = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.twelvedata.com/stocks?source=docs")
      //fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((resp) => resp.json())
      .then((resp) => setStocks(resp.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const limite = 20;
  const paginaActual = 1;

  const inicial = (paginaActual - 1) * limite;
  const final = inicial + limite;

  let array = [];

  if (!loading) {
    array = stocks.slice(inicial, final);
  }

  console.log(array);
  return (
    <div>
      <h2>Stocks 2</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <StocksList stocks={array} />
        </>
      )}
    </div>
  );
};
