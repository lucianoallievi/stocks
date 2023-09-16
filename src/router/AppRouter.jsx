import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { StockDetail } from "../components/StockDetail/StockDetail";
import Stocks from "../components/Stocks/Stocks";
import { Stocks2 } from "../components/Stocks/Stocks2";
import { StockContext } from "../context/stockContext";

const AppRouter = () => {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/stocks/:pageURL" element={<Stocks />} />

          <Route path="/stocks2" element={<Stocks2 />} />
          <Route path="/stocks2/:pageURL" element={<Stocks2 />} />

          <Route path="/stocks/detail/:symbol" element={<StockDetail />} />

          <Route path="*" element={<Navigate to={"/stocks2"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
