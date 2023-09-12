import { Link } from "react-router-dom";

export const StocksListEntry = ({ stock }) => {
  return (
    <tr>
      <td>
        <Link to={`/stocks/detail/${stock.symbol}`}> {stock.symbol} </Link>
      </td>
      <td> {stock.name} </td>
      <td> {stock.currency} </td>
      <td> {stock.type} </td>
    </tr>
  );
};
