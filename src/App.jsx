import "./App.css";
import AppRouter from "./router/AppRouter";
//import Stocks from "./components/Stocks/Stocks";
import { StockProvider } from "./context/stockContext";

function App() {
  return (
    <StockProvider>
      <AppRouter />
    </StockProvider>
  );
  //return <Stocks />;
}
export default App;
