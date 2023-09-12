import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useQuery } from "@tanstack/react-query";
import { getStockDetail } from "../../api/stocksAPI";
import { useEffect, useState } from "react";
import { StocksList } from "../StocksList/StocksList";

const STOCK_MOCK = {
  country: "United States",
  currency: "USD",
  exchange: "NYSE",
  mic_code: "XNYS",
  name: "Agilent Technologies, Inc.",
  symbol: "A",
  type: "Common Stock",
};

export const StockDetail = ({ stock }) => {
  const [tipoFecha, setTipoFecha] = useState(null);
  const [intervalo, setIntervalo] = useState(null);
  const [desdeFecha, setDesdeFecha] = useState(null);
  const [desdeHora, setDesdeHora] = useState(null);
  const [hastaFecha, setHastaFecha] = useState(null);
  const [hastaHora, setHastaHora] = useState(null);
  const [formulario, setFormulario] = useState(null);
  stock = { ...STOCK_MOCK, interval: "5min" };

  const { data, isFetching, isError, refetch, error } = useQuery({
    queryKey: ["stockDetail"],
    queryFn: () => getStockDetail(formulario),
    //queryFn: ()=> { fetch()}
  });
  if (data) {
    let array_valores = [];
    data.values.forEach((d) => {
      array_valores.push(Number.parseInt(d.close));
    });
    console.log(array_valores);
    try {
      Highcharts.chart("grafico_lineas", {
        title: {
          text: stock.symbol,
          align: "left",
        },

        subtitle: {
          text: "",
          align: "left",
        },

        yAxis: {
          title: {
            text: "Number of Employees",
          },
        },

        xAxis: {
          accessibility: {
            rangeDescription: "Range: 2010 to 2020",
          },
        },

        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
        },

        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
            pointStart: 2010,
          },
        },

        series: [
          {
            name: "Installation & Developers",
            data: array_valores,
          },
        ],

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom",
                },
              },
            },
          ],
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  const graficar = () => {
    if (tipoFecha == "tiempoReal") {
      setFormulario({ symbol: stock.symbol, interval: intervalo });
      refetch();
    } else if (tipoFecha == "historico") {
      let opcional = {
        year: "2-digit",
        month: "2-digit",
        weekDay: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setFormulario({
        symbol: stock.symbol,
        interval: intervalo + "min",
        start_date: desdeFecha + " " + desdeHora + ":00",
        end_date: hastaFecha + " " + hastaHora + ":00",
      });
      refetch();
    }
    /*console.log(intervalo);
    console.log(tipoFecha);
    console.log(desdeFecha);
    console.log(desdeHora);
    console.log(hastaFecha);
    console.log(hastaHora);*/
  };

  return (
    <div>
      <h2>
        {stock.symbol} - {stock.name}
      </h2>
      <form action="">
        <div>
          <input
            type="radio"
            name="tipoFecha"
            id="tiempoReal"
            value="tiempoReal"
            onChange={(e) => {
              setTipoFecha(e.target.value);
            }}
          />
          <label htmlFor="tiempoReal">Tiempo Real</label>
        </div>
        <div>
          <input
            type="radio"
            name="tipoFecha"
            id="historico"
            value="historico"
            onChange={(e) => setTipoFecha(e.target.value)}
          />
          <label htmlFor="historico">Historico</label>
          <input
            type="date"
            name="desde_fecha"
            onChange={(e) => setDesdeFecha(e.target.value)}
          />
          <input
            type="time"
            name="desde_hora"
            onChange={(e) => setDesdeHora(e.target.value)}
          />

          <input
            type="date"
            name="hasta_fecha"
            onChange={(e) => setHastaFecha(e.target.value)}
          />
          <input
            type="time"
            name="hasta_hora"
            onChange={(e) => setHastaHora(e.target.value)}
          />
        </div>
        <div>
          <select
            name="intervalo"
            id=""
            required
            onChange={(e) => {
              setIntervalo(e.target.options[e.target.selectedIndex].value);
              console.log(e.target.options[e.target.selectedIndex].value);
            }}
          >
            <option> Seleccionar intervalo</option>
            <option value="1">1 minuto</option>
            <option value="5">5 minutos</option>
            <option value="15">15 minutos</option>
          </select>
        </div>
        <button type="button" onClick={() => graficar()}>
          {" "}
          Graficar
        </button>
      </form>
      <hr />
      <div id="grafico_lineas"></div>
      {/*isFetching ? <p>Cargando</p> : <p>{JSON.stringify(data)}</p>*/}
    </div>
  );
};
