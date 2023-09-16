import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useQuery } from "@tanstack/react-query";
import { getStockDetail } from "../../api/stocksAPI";
import { useContext, useEffect, useState } from "react";
import { StocksList } from "../StocksList/StocksList";
import { StockContext } from "../../context/stockContext";
import { StockGraphic } from "../StockGraphic/StockGraphic";
import { Navigate } from "react-router-dom";
import { GraphForm } from "../GraphForm/GraphForm";

/*const STOCK_MOCK = {
  country: "United States",
  currency: "USD",
  exchange: "NYSE",
  mic_code: "XNYS",
  name: "Agilent Technologies, Inc.",
  symbol: "A",
  type: "Common Stock",
};
*/

export const StockDetail = () => {
  const { getStock } = useContext(StockContext);
  const [laoding, setLoading] = useState(true);
  const [values, setValues] = useState({});
  const [searchOptions, setSearchOptions] = useState({});
  const [data, setData] = useState([]);

  const [tipoFecha, setTipoFecha] = useState(null);
  const [intervalo, setIntervalo] = useState(null);
  const [desdeFecha, setDesdeFecha] = useState(null);
  const [desdeHora, setDesdeHora] = useState(null);
  const [hastaFecha, setHastaFecha] = useState(null);
  const [hastaHora, setHastaHora] = useState(null);

  let array_valores = [];
  const stock = getStock();

  if (!stock) return <Navigate to="/" />;

  //stock = { ...STOCK_MOCK, interval: "5min" };

  useEffect(() => {
    let url = `https://api.twelvedata.com/time_series?symbol=${stock.symbol}&interval=${searchOptions.interval}`;

    if (setSearchOptions.tipoFecha == "historico") {
      url =
        url +
        `&start_date=${searchOptions.start_date}&end_date=${searchOptions.end_date}`;
    }

    url = url + "&apikey=c9b238306ce4412085073f72f1ac3f0e";

    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
        console.log(resp);
      })
      .catch((error) => console.log("Error:", error))
      .finally(() => setLoading(false));
  }, [searchOptions]);
  if (data) {
    if (data.status == "ok") {
      data.values.forEach((d) => {
        array_valores.push(Number.parseInt(d.close));
      });
      /*try {
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
      }*/
    }
  }

  /*const { data, isFetching, isError, refetch, error } = useQuery({
    queryKey: ["stockDetail"],
    queryFn: () => getStockDetail(formulario),
    //queryFn: ()=> { fetch()}
  });
  
  */

  const graficar = () => {
    if (tipoFecha == "tiempoReal") {
      let formulario = {
        symbol: stock.symbol,
        interval: intervalo,
        tipoFecha: "tiempoReal",
      };
      console.log(formulario);
      setSearchOptions({ ...formulario });
    } else if (tipoFecha == "historico") {
      let opcional = {
        year: "2-digit",
        month: "2-digit",
        weekDay: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      let formulario = {
        symbol: stock.symbol,
        interval: intervalo,
        start_date: desdeFecha + " " + desdeHora + ":00",
        end_date: hastaFecha + " " + hastaHora + ":00",
        tipoFecha: "historico",
      };
      setSearchOptions({ ...formulario });
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
      <hr />
      <GraphForm setSearchOptions={setSearchOptions} />
      {/*<div id="grafico_lineas"></div>*/}
      <StockGraphic stock={stock} array_valores={array_valores} />

      {/*isFetching ? <p>Cargando</p> : <p>{JSON.stringify(data)}</p>*/}
    </div>
  );
};
