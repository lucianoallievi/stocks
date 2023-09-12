import Table from "react-bootstrap/Table";
import { StocksListEntry } from "../StocksListEntry/StocksListEntry";
import uuid from "react-uuid";

export const StocksList = ({ stocks }) => {
  return (
    <div className="container my-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Símbolo</th>
            <th>Nombre</th>
            <th>Moneda</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <StocksListEntry stock={stock} key={uuid()} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
