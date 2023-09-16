import { createContext, useState } from "react";

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stock, setStock] = useState();

  const updateStock = (stock) => {
    setStock(stock);
  };
  const getStock = () => {
    return stock;
  };

  return (
    <StockContext.Provider value={{ updateStock, getStock }}>
      {" "}
      {children}
    </StockContext.Provider>
  );
};
