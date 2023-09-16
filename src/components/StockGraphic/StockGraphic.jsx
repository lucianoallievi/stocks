import Highcharts from "highcharts";

export const StockGraphic = ({ stock, array_valores }) => {
  if (stock && array_valores) {
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

  return <div id="grafico_lineas"></div>;
};
